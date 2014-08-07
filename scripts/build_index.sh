TEMPLATES=$(find osv/templates -type f -name '*.html' )

INDEX_FILE="public/dashboard/index.html"

index_head () 
{
	cat "osv/templates/base/top"
}

index_bottom () 
{
	cat "osv/templates/base/bottom"
}

template_tag ()
{
	echo "<script type='template/handlebars' data-template-path='/$1'>"
	cat $1;
	echo '</script>'
}

index_body ()
{
	for template in $TEMPLATES; do
		template_tag $template
	done
}

build_index ()
{
	index_head > $INDEX_FILE;
	index_body >> $INDEX_FILE;
	index_bottom >> $INDEX_FILE;
}

build_index

