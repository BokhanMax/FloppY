<script setup>
import ProgramCard from './components/ProgramCard.vue'
</script>

<template>
  <header></header>
  <main>
    <div class="container">
      <ProgramCard
        name="Google Chrome"
        description="Браузер від компанії Google"
        icon="/icons/ChromeIcon.svg"
        link64="https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B24F3351A-A4AF-042A-4DA6-AEE56456DDA4%7D%26lang%3Duk%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Ddefaultbrowser/update2/installers/ChromeStandaloneSetup64.exe"
        link32="https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B24F3351A-A4AF-042A-4DA6-AEE56456DDA4%7D%26lang%3Duk%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3D-statsdef_1%26installdataindex%3Ddefaultbrowser/update2/installers/ChromeStandaloneSetup.exe"
      />

      <ProgramCard
        name="WinRAR"
        description="Безумовно найвідоміший архіватор для Windows"
        icon="/icons/WinRarIcon.svg"
        link64="https://www.rarlab.com/rar/winrar-x64-701uk.exe"
      />

      <ProgramCard
        name="K-Lite Mega Codec Pack"
        description="Найбільш повний набір кодеків для відтворення та перепаковки відео"
        icon="/icons/KLiteIcon.png"
        linkcommon="https://files3.codecguide.com/K-Lite_Codec_Pack_1890_Mega.exe"
      />

      <ProgramCard
        name="Foobar2000"
        description="Легендарний аудіо-плеєр з конвертером, візуалізаціями та багатим вибором зовнішнього вигляду"
        icon="/icons/Foobar2000Icon.png"
        link64="https://www.foobar2000.org/getfile/foobar2000-x64_v2.24.4.exe"
        link32="https://www.foobar2000.org/getfile/foobar2000_v2.24.4.exe"
      />

      <ProgramCard
        name="STDU Viewer"
        description="Дуже компактний переглядач PDF, а також багатьох форматів електроних книжок та коміксів"
        icon="/icons/STDUIcon.png"
        linkcommon="http://www.stdutility.com/download/stduviewer.exe"
      />

      <ProgramCard
        name="Total Commander"
        description="Гнучкий файловий менеджер з багатою історією, має безліч можливостей розширення функціоналу"
        icon="/icons/TotalCommanderIcon.png"
        linkcommon="https://totalcommander.ch/1151/tcmd1151x32_64.exe"
      />

      <ProgramCard
        name="Thunderbird"
        description="Зручний email-агент з календарем та планувальником від компанії Mozilla"
        icon="/icons/ThunderbirdIcon.png"
        link64="https://download.mozilla.org/?product=thunderbird-138.0-SSL&os=win64&lang=uk"
        link32="https://download.mozilla.org/?product=thunderbird-138.0-SSL&os=win&lang=uk"
      />

      <ProgramCard
        name="Geek Uninstaller"
        description="Кращий інструмент для правильної деінсталяції програм"
        icon="/icons/GeekUninstallerIcon.png"
        linkcommon="https://geekuninstaller.com/geek.zip"
      />

      <ProgramCard
        name="Telegram Desktop"
        description="Популярний месенджер для спілкування з широкими можливостями"
        icon="/icons/TelegramIcon.png"
        link64="https://telegram.org/dl/desktop/win64"
        link32="https://telegram.org/dl/desktop/win"
      />

      <ProgramCard
        name="Notepad++"
        description="Безкоштовний редактор текстових файлів з підтримкою синтаксисів мов програмування"
        icon="/icons/NotepadPlusPlusIcon.png"
        link64="https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.8.1/npp.8.8.1.Installer.x64.exe"
        link32="https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.8.1/npp.8.8.1.Installer.exe"
      />
    </div>
  </main>
  <footer></footer>
</template>
