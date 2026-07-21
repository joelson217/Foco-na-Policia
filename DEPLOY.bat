@echo off
chcp 65001 >nul
title Deploy — Concursos-Policiais

echo.
echo  ╔══════════════════════════════════════╗
echo  ║   DEPLOY — Concursos-Policiais       ║
echo  ║   Enviando atualizações para nuvem   ║
echo  ╚══════════════════════════════════════╝
echo.

cd /d "c:\Users\PROFESSOR\Documents\APP Concursos Policiais"

:: Verifica se o repositório git está configurado
if not exist ".git" (
    echo [ERRO] Repositório Git não encontrado!
    echo Execute o setup inicial primeiro.
    pause
    exit /b 1
)

:: Adiciona todos os arquivos modificados
echo [1/4] Detectando arquivos modificados...
git add -A

:: Cria commit com data/hora atual
set TIMESTAMP=%date% %time%
echo [2/4] Criando versão com timestamp: %TIMESTAMP%
git commit -m "Atualização automática — %TIMESTAMP%"

:: Envia para o GitHub
echo [3/4] Enviando para o GitHub...
git push origin main

echo.
echo [4/4] Deploy concluído!
echo.
echo  ✅ Seu app foi atualizado na nuvem!
echo  🌐 Link: https://joelson217.github.io/Concursos-Policiais/
echo  📱 O iPhone atualiza automaticamente ao abrir o app.
echo.
pause
