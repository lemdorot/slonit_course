# Работа с Git:
1. Основы – Конфигурация
	- git init - инициализация репозитория
	- git config user.name "user_name" - настройка имени пользователя для git
	- git config user.email "user_email" - настройка email пользователя для git
	- git config --list - посмотреть настройки git
2. Git – Основы – Создание репозитория, первый коммит
	- git status - показать статус рабочего дерева
	- git add - добавляет изменения в индекс
	- git commit -m "message" - записываем изменения в репозиторий
3. Git – Основы – Git show, кто такие автор и коммиттер
	- git show - посмотреть текущий коммит
4. Git – Основы – Добавление файлов и директорий, git status
	- git reset HEAD foldername - сбрасывает изменения в индексе для каталога foldername
	- git add -f filename - принудительно добавить в индекс файл, который записан в .gitignore
5. Git – Основы – Зачем нужен индекс?
	- git add -p filename - флаг -p позволяет уточнить для каждого изменения в файле, добавлять или нет
6. Git – Основы – Коммиты без git add
	- git commit -a -m "message" - флаг -a позволяет записывать изменения сразу в репозиторий без промежуточного добавления в индекс командой git add, но не добавляет новые файлы
7. Git – Основы – Удаление и переименование файлов
	git rm -r foldername - удаление папки из проекта и добавление изменений в индекс
	git rm -r --cached foldername - удаление папки из индекса, но в рабочем каталоге папка останется
	git mv oldfile newfile - преименовывает файл и добавляет в индекс
