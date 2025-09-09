/**
 * LAYOUT PRINCIPAL DA APLICAÇÃO DE ACESSIBILIDADE
 *
 * Este arquivo gerencia toda a estrutura principal do app, incluindo:
 * - Estados de acessibilidade (alto contraste, escala de fonte, alvos grandes)
 * - Sistema de navegação por abas
 * - Tela de bloqueio com biometria
 * - Timer de inatividade
 * - Configurações de foco para leitores de tela
 */

import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  AccessibilityInfo, // API para interagir com leitores de tela
  AppState, // Para detectar quando app vai para background
  findNodeHandle, // Para manipular foco de elementos
} from "react-native";
import { makeTheme } from "../styles/theme";
import { makeGlobalStyles } from "../styles/globalStyles";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import LockScreen from "./LockScreen";

export default function App() {
  // ========== ESTADOS DE ACESSIBILIDADE ==========
  // Controla se o tema de alto contraste está ativo
  const [isHighContrast, setIsHighContrast] = useState(false);

  // Controla a escala de fonte personalizada (além do sistema)
  const [fontScale, setFontScale] = useState(1.0);

  // Controla se os alvos de toque devem ser maiores
  const [bigTargets, setBigTargets] = useState(true);

  // ========== GERAÇÃO DINÂMICA DE TEMA E ESTILOS ==========
  // Cria o tema baseado na configuração de alto contraste
  const theme = makeTheme(isHighContrast);

  // Gera os estilos globais baseados no tema e configurações de acessibilidade
  const styles = makeGlobalStyles({ theme, fontScale, bigTargets });

  // ========== NAVEGAÇÃO SIMPLES POR ABAS ==========
  // Estado que controla qual aba está ativa (home ou settings)
  const [tab, setTab] = useState("home");

  // ========== SISTEMA DE BLOQUEIO ==========
  // Controla se o app está bloqueado (inicia bloqueado para segurança)
  const [locked, setLocked] = useState(true);

  // Função para desbloquear o app
  const unlock = () => setLocked(false);

  // ========== TIMER DE INATIVIDADE ==========
  // Referência para o timer que bloqueia o app após inatividade
  const idleTimer = useRef(null);

  // Referência para o elemento principal (usado para foco)
  const mainRef = useRef(null);

  // Estado que monitora se um leitor de tela está ativo
  const [srEnabled, setSrEnabled] = useState(false);

  // ========== FUNÇÃO PARA RESETAR TIMER DE INATIVIDADE ==========
  const resetIdleTimer = () => {
    // Limpa o timer anterior se existir
    if (idleTimer.current) clearTimeout(idleTimer.current);

    // Cria um novo timer de 30 segundos
    idleTimer.current = setTimeout(() => {
      // Bloqueia o app após 30 segundos de inatividade
      setLocked(true);

      // Anuncia para leitores de tela que o app foi bloqueado
      AccessibilityInfo.announceForAccessibility(
        "App bloqueado por inatividade."
      );
    }, 30_000); // 30 segundos
  };

  // ========== CAPTURA DE TOQUES PARA RESETAR TIMER ==========
  // Função que captura qualquer toque no app para resetar o timer de inatividade
  const onAnyTouchStart = () => {
    resetIdleTimer();
    return false; // não intercepta o evento, apenas monitora
  };

  // ========== EFFECTS PARA CONFIGURAÇÃO INICIAL E LISTENERS ==========
  useEffect(() => {
    // Inicia o timer de inatividade
    resetIdleTimer();

    // ===== LISTENER PARA MUDANÇAS DE ESTADO DO APP =====
    // Monitora quando o app vai para background/foreground
    const sub = AppState.addEventListener("change", (state) => {
      if (state !== "active") {
        // Se o app não está ativo (background), bloqueia automaticamente
        setLocked(true);
      }
    });

    // ===== LISTENER PARA MUDANÇAS NO LEITOR DE TELA =====
    // Monitora quando o leitor de tela é ativado/desativado
    const srSub = AccessibilityInfo.addEventListener(
      "screenReaderChanged",
      (enabled) => {
        setSrEnabled(enabled);
      }
    );

    // Verifica o estado inicial do leitor de tela
    AccessibilityInfo.isScreenReaderEnabled().then(setSrEnabled);

    // ===== CLEANUP =====
    // Função de limpeza que remove listeners e timers
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      sub.remove();
      srSub.remove();
    };
  }, []);

  // ========== EFFECT PARA GERENCIAR FOCO AO TROCAR DE ABA ==========
  // Útil para leitores de tela: move o foco para o conteúdo principal
  useEffect(() => {
    const node = findNodeHandle(mainRef.current);
    if (node) {
      // Aguarda um pequeno delay para garantir que a tela foi renderizada
      setTimeout(() => AccessibilityInfo.setAccessibilityFocus(node), 200);
    }
  }, [tab]); // Executa sempre que a aba muda

  // ========== FUNÇÃO SKIP TO CONTENT ==========
  // Permite que usuários de leitores de tela pulem diretamente para o conteúdo principal
  const focusMain = () => {
    const node = findNodeHandle(mainRef.current);
    if (node) AccessibilityInfo.setAccessibilityFocus(node);
  };

  return (
    // ========== CONTAINER PRINCIPAL ==========
    <View
      style={styles.app}
      onStartShouldSetResponder={onAnyTouchStart} // Captura toques para resetar timer
      accessible={false} // Não é lido pelo leitor de tela (apenas container)
    >
      {/* ========== CONDICIONAL: TELA BLOQUEADA OU DESBLOQUEADA ========== */}
      {locked ? (
        // TELA DE BLOQUEIO
        <LockScreen
          theme={theme}
          fontScale={fontScale}
          bigTargets={bigTargets}
          onUnlock={unlock}
        />
      ) : (
        <>
          {/* ========== BOTÃO "SKIP TO CONTENT" ========== */}
          {/* Botão visível apenas para usuários de leitores de tela */}
          {/* Permite pular diretamente para o conteúdo principal */}
          {srEnabled && (
            <Pressable
              onPress={focusMain}
              style={styles.srOnlySkip}
              accessibilityRole="button"
              accessibilityLabel="Pular para o conteúdo principal"
              accessibilityHint="Move o foco do leitor de tela para o conteúdo principal."
            >
              <Text style={styles.srOnlySkipText}>Pular para conteúdo</Text>
            </Pressable>
          )}

          {/* ========== HEADER DA APLICAÇÃO ========== */}
          <View style={styles.header} accessible accessibilityRole="header">
            <Text style={styles.headerTitle}>A11y App</Text>

            {/* Botão para bloquear manualmente o app */}
            <Pressable
              onPress={() => setLocked(true)}
              style={styles.lockNowBtn}
              accessibilityRole="button"
              accessibilityLabel="Bloquear agora"
              accessibilityHint="Bloqueia a tela e pede sua biometria para desbloquear."
            >
              <Text style={styles.lockNowText}>Bloquear</Text>
            </Pressable>
          </View>

          {/* ========== BARRA DE NAVEGAÇÃO POR ABAS ========== */}
          {/* Implementa navegação acessível entre diferentes seções */}
          <View style={styles.tabBar} accessible accessibilityRole="tablist">
            {["home", "settings"].map((t) => {
              const selected = tab === t;
              return (
                <Pressable
                  key={t}
                  onPress={() => setTab(t)}
                  style={[styles.tabBtn, selected && styles.tabBtnActive]}
                  accessibilityRole="tab"
                  accessibilityState={{ selected }} // Informa ao leitor de tela se a aba está selecionada
                  accessibilityLabel={t === "home" ? "Início" : "Configurações"}
                  accessibilityHint="Alterna a seção exibida no app."
                >
                  <Text style={styles.tabBtnText}>
                    {t === "home" ? "Início" : "Configurações"}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* ========== ÁREA DE CONTEÚDO PRINCIPAL ========== */}
          {/* Referência mantida para controle de foco */}
          <View
            ref={mainRef}
            style={styles.content}
            accessible
            accessibilityLabel="Conteúdo principal"
          >
            {/* Renderização condicional baseada na aba selecionada */}
            {tab === "home" ? (
              <HomeScreen
                theme={theme}
                fontScale={fontScale}
                bigTargets={bigTargets}
              />
            ) : (
              <SettingsScreen
                theme={theme}
                fontScale={fontScale}
                setFontScale={setFontScale}
                isHighContrast={isHighContrast}
                setIsHighContrast={setIsHighContrast}
                bigTargets={bigTargets}
                setBigTargets={setBigTargets}
              />
            )}
          </View>
        </>
      )}
    </View>
  );
}
