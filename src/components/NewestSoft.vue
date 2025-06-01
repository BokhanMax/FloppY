<script setup>
import ProgramCard from './ProgramCard.vue'
</script>

<template>

	<h2 class="xs:text-2xl text-3xl font-bold text-center mb-8 text-green-dark">Останні оновлення програм</h2>
	
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	
			<ProgramCard
				name="Google Chrome"
				description="Браузер від компанії Google, зручний та безпечний для роботи"
				icon="/icons/ChromeIcon.svg"
				version="137.0.7151.56"
				link64="https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B24F3351A-A4AF-042A-4DA6-AEE56456DDA4%7D%26lang%3Duk%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Ddefaultbrowser/update2/installers/ChromeStandaloneSetup64.exe"
				link32="https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B24F3351A-A4AF-042A-4DA6-AEE56456DDA4%7D%26lang%3Duk%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3D-statsdef_1%26installdataindex%3Ddefaultbrowser/update2/installers/ChromeStandaloneSetup.exe"
			/>
	
			<ProgramCard
				name="WinRAR"
				description="Безумовно найвідоміший архіватор для Windows, працює з багатьма форматами"
				icon="/icons/WinRarIcon.svg"
				version="7.11"
				link64="https://www.rarlab.com/rar/winrar-x64-711uk.exe"
			/>
	
			<ProgramCard
				name="K-Lite Mega Codec Pack"
				description="Найбільш повний набір кодеків для відтворення та перепаковки відео"
				icon="/icons/KLiteIcon.png"
				version="18.9.5"
				linkcommon="https://files3.codecguide.com/K-Lite_Codec_Pack_1895_Mega.exe"
			/>
	
			<ProgramCard
				name="Foobar2000"
				description="Легендарний аудіо-плеєр з конвертером, візуалізаціями та багатим вибором зовнішнього вигляду"
				icon="/icons/Foobar2000Icon.png"
				version="2.24.4"
				link64="https://www.foobar2000.org/getfile/foobar2000-x64_v2.24.4.exe"
				link32="https://www.foobar2000.org/getfile/foobar2000_v2.24.4.exe"
			/>
	
			<ProgramCard
				name="STDU Viewer"
				description="Дуже компактний переглядач PDF, а також багатьох форматів електроних книжок та коміксів"
				icon="/icons/STDUIcon.png"
				version="1.6.361"
				linkcommon="http://www.stdutility.com/download/stduviewer.exe"
			/>
	
			<ProgramCard
				name="Total Commander"
				description="Гнучкий файловий менеджер з багатою історією, має безліч можливостей розширення функціоналу"
				icon="/icons/TotalCommanderIcon.png"
				version="11.51"
				linkcommon="https://totalcommander.ch/1151/tcmd1151x32_64.exe"
			/>
	
			<ProgramCard
				name="Thunderbird"
				description="Зручний email-агент з календарем та планувальником від компанії Mozilla"
				icon="/icons/ThunderbirdIcon.png"
				version="139.0"
				link64="https://download.mozilla.org/?product=thunderbird-139.0-SSL&os=win64&lang=uk"
				link32="https://download.mozilla.org/?product=thunderbird-139.0-SSL&os=win&lang=uk"
			/>
	
			<ProgramCard
				name="Geek Uninstaller"
				description="Кращий інструмент для правильної деінсталяції програм, видаляє всі залишки в системі та реєстрі"
				icon="/icons/GeekUninstallerIcon.png"
				version="1.5.2.165"
				linkcommon="https://geekuninstaller.com/geek.zip"
			/>
	
			<ProgramCard
				name="Telegram Desktop"
				description="Популярний месенджер для спілкування з широкими можливостями"
				icon="/icons/TelegramIcon.png"
				version="5.14.3"
				link64="https://telegram.org/dl/desktop/win64"
				link32="https://telegram.org/dl/desktop/win"
			/>
	
			<ProgramCard
				name="Notepad++"
				description="Безкоштовний редактор текстових файлів з підтримкою синтаксисів мов програмування"
				icon="/icons/NotepadPlusPlusIcon.png"
				version="8.8.1"
				link64="https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.8.1/npp.8.8.1.Installer.x64.exe"
				link32="https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.8.1/npp.8.8.1.Installer.exe"
			/>
	
		</div>

</template>