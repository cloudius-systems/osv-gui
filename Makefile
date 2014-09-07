TEMPLATE_SRCS=$(shell find osv/templates/ -type f -name '*.html')
JAVASCRIPT_LIBS=$(shell find lib/ -type f -name '*.js' | sort)
JAVASCRIPT_SRCS_BASE=osv/helpers.js osv/Settings.js osv/API/GraphAPI.js osv/API/ThreadsGraphAPI.js osv/API/*.js osv/API/Applications/CassandraGraph.js osv/API/Applications/*.js osv/Boxes/BaseBox.js osv/Boxes/StaticBox.js osv/Boxes/StaticInfo.js osv/Boxes/GraphBox.js  osv/Boxes/SideTextGraphBox.js osv/Boxes/ThreadsGraph.js osv/Layouts/BoxesLayout.js osv/Layouts/ThreadsLayout.js osv/Boxes/ThreadsTableBox.js osv/PageHandlers/Dashboard/*
JAVASCRIPT_SRCS=$(filter-out $(JAVASCRIPT_SRCS_BASE),$(shell find osv/ -type f -name '*.js'))

MAIN_INDEX=public/dashboard/index.html
MAIN_JS=public/dashboard_static/out.js
LIB_JS=public/dashboard_static/lib.js

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
