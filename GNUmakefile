# Окружение: development, testing, production
export YENV ?= development

# Если вы не используете ycssjs-fastcgi для сборки статики на лету,
# раскомментируйте следующую строку
#YCSSJS_FASTCGI = false

# Откуда брать Лего
LEGO_PATH = versions/2.9
LEGO_REV = HEAD

# Укажите здесь все директории Лего, которые нужно подключать на сервис
LEGO_PARTS = bem-bl blocks-common blocks-desktop tools
# Для интранет сервисов раскомментируйте следующую строку
#LEGO_PARTS += intranet/blocks-desktop

# Протокол для работы с svn
#SVN_PROTOCOL = svn+ssh

# Куда складывать Лего (слеш на конце обязателен)
LEGO_PREFIX = lego/

# Для интранет сервисов раскомментируйте следующую строку
#PAGE_LEVELS_LEGO_POST = $(PAGE_LEVELS_LEGO_INTRANET)

# Если вы хотите собирать бандлы со статикой всех страниц,
# раскомментируйте следующую строку
#GENERATE_COMMON_BUNDLE = true

# В следующей строке можно задать имя бандла со статикой
#COMMON_BUNDLE_NAME = common

# Если вы не используете ycssjs-fastcgi, раскомментируйте следующую строку
# и перечислите в ней расширения всех файлов, которые нужно сжимать, используя
# ycssjs
#PAGES_UNDERSCORE_SUFFIXES = css ie.css js

PAGES_SUFFIXES = html

# Сборка html
define after_PAGE_template

$(5).html:: $(5).bemhtml.js $(5).bemjson.js
	$(LEGO_PREFIX)tools/bemjson2html.js $$^ $$@

endef

.PHONY: all
all:: build

ifneq ($(wildcard $(LEGO_PREFIX)tools/),)

.PHONY: build
#build:: lego.get
build:: configs
build:: rebuild

# Подключение основной логики сборки
include $(LEGO_PREFIX)tools/make/platform.mk

else

# Получение минимального набора из Лего, когда директории с Лего нет совсем
.PHONY: build
build:: lego.get
	$(MAKE) $(MAKECMDGOALS)

.PHONY: lego.get
lego.get::
	svn cat $(SVN_PROTOCOL)://svn.yandex.ru/lego/$(LEGO_PATH)/tools/make/get-lego.mk | $(MAKE) -f- lego.get LEGO_PATH=$(LEGO_PATH) LEGO_REV=$(LEGO_REV) LEGO_PREFIX=$(LEGO_PREFIX) LEGO_PARTS="$(LEGO_PARTS)"

endif

.PHONY: rebuild
rebuild:: all-pages
rebuild:: ycssjs

.PHONY: FORCE
FORCE:
