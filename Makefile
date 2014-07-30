TEMPLATE_SRCS=$(shell find osv/templates/ -type f -name '*.html')
JAVASCRIPT_LIBS=$(shell find lib/ -type f -name '*.js' | sort)
JAVASCRIPT_SRCS_BASE=osv/helpers.js osv/Settings.js osv/API/*.js osv/Layouts/BoxesLayout.js osv/Layouts/ThreadsLayout.js osv/Boxes/StaticBox.js osv/Boxes/StaticInfo.js osv/Boxes/BaseBox.js osv/Boxes/GraphBox.js
JAVASCRIPT_SRCS=$(filter-out $(JAVASCRIPT_SRCS_BASE),$(shell find osv/ -type f -name '*.js'))

MAIN_INDEX=public/index.html
MAIN_JS=public/out.js
LIB_JS=public/lib.js

ALL=$(MAIN_INDEX) $(MAIN_JS) $(LIB_JS)

all: $(ALL)

$(MAIN_INDEX): $(TEMPLATE_SRCS)
	scripts/build_index.sh > $@

$(MAIN_JS): $(JAVASCRIPT_SRCS) $(JAVASCRIPT_SRCS_BASE)
	echo "" > $@;
	echo $(JAVASCRIPT_SRCS_BASE);
	for SOURCE in $(JAVASCRIPT_SRCS_BASE) ; do \
		echo "//FILE: $$SOURCE" >> $@; \
		cat $$SOURCE >> $@; \
	done;
	for SOURCE in $(JAVASCRIPT_SRCS) ; do \
		echo "//FILE: $$SOURCE" >> $@; \
		cat $$SOURCE >> $@; \
	done;

$(LIB_JS): $(JAVASCRIPT_LIBS)
	echo "" > $@;
	for LIB in $(JAVASCRIPT_LIBS) ; do cat $$LIB >> $@; done;

clean:
	@rm -f $(ALL)

.PHONY: all clean
