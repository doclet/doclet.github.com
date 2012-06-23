TeXDoclet is a Java doclet implementation that generates a LaTeX file from you Java code documentation.

The doclet is based on the doclet originally created by Greg Wonderly of
[C2 technologies Inc.](http://www.c2-tech.com>) and its revision by Soeren Caspersen of
[XO Software](http://www.xosoftware.dk).

Example outputs
---------------

See the following example PDF documents which are generated by *pdflatex* from *TeXDoclet* LaTeX output :

* report document class example : [TeXDoclet_report.pdf](resources/examples/TeXDoclet_report.pdf)
* article document class example : [TeXDoclet_article.pdf](resources/examples/TeXDoclet_article.pdf)

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
<script src="javascripts/lightbox/js/lightbox.js"></script>
<script src="javascripts/my_script.js"></script>
<link href="css/lightbox.css" rel="stylesheet" />
<link href="css/my_stylesheet.css" rel="stylesheet" />
<div id="exampleImagesDiv">
	<span><a href="images/examples/texdoclet_content_structuring.png" rel="lightbox[roadtrip]" title="content structuring">
		<img src="images/examples/texdoclet_content_structuring.png"></a></span>
	<span><a href="images/examples/texdoclet_class_hierarchy.png" rel="lightbox[roadtrip]" title="class hierarchy">
		<img src="images/examples/texdoclet_class_hierarchy.png"></a></span>
	<span><a href="images/examples/texdoclet_package_overview.png" rel="lightbox[roadtrip]" title="package overview">
		<img src="images/examples/texdoclet_package_overview.png"></a></span>
	<span><a href="images/examples/texdoclet_class_description_1_with_summaries.png" rel="lightbox[roadtrip]" title="class description part 1 with summaries">
		<img src="images/examples/texdoclet_class_description_1_with_summaries.png"></a></span>
	<span><a href="images/examples/texdoclet_class_description_2.png" rel="lightbox[roadtrip]" title="class description part 2">
		<img src="images/examples/texdoclet_class_description_2.png"></a></span>
</div>


Download
--------

<div id="downloadTexdocletDiv">
<a href="resources/bin/TeXDoclet.jar"><img src="images/download.png"></a>
</div>

### TeXDoclet.jar

[*TeXDoclet.jar*](resources/bin/TeXDoclet.jar) is all you need to create LaTeX file from your Java sources.

### Latest version

You can also check out the latest *TeXDoclet* version by cloning the repository `https://github.com/doclet/texdoclet.git`

    git clone https://github.com/doclet/texdoclet.git

And compile the *TeXDoclet.jar* with maven2 from the project root directory :

	mvn clean install

This generates the *TeXDoclet.jar* file in the `target/` subdirectory.

Code
----

The *TeXDoclet* source code is hosted on *Github* in the *Git* repository `https://github.com/doclet/texdoclet.git`.

*Github* project site : <http://github.com/doclet/texdoclet>.

Usage
-----

Generally a Java documentation is created with the *javadoc* tool (and its default doclet) that comes along with the Java JRE/JDK installation. To create a Java documentation with a doclet other than the default doclet you have to specify the doclet with the `-docletpath` and `-doclet` parameters of the *javadoc* tool :

	javadoc -docletpath <path to doclet .jar file> -doclet <doclet class name>

According to this you have to set the path to the *TeXDoclet.jar* file and the class name `org.stfm.texdoclet.TeXDoclet` for the *javadoc* use with *TeXDoclet* doclet.

Assuming you have the following project structure :

    <project root dir>
      src
        main
          java
            com
              <subpackages and java code> 
            org
              <subpackages and java code>

Then the following example *javadoc* execution builds Javadoc documentation from Java sources located in `src/main/java` subdirectory for all packages starting with `org` and `com` :

	javadoc -docletpath path/to/TeXDoclet.jar \
		-doclet org.stfm.texdoclet.TeXDoclet \
		-noindex \
		-tree \
		-hyperref \
		-output out.tex \
		-title "My Title" \
		-author "My Name" \
		-sourcepath src/main/java \
		-subpackages org:com

All arguments beside `-docletpath` and `-doclet` are special *TeXDoclet* arguments here. The command produces the output file `out.tex`LaTeX in the current working directory.

### Example javadoc calls

See `createDocs.sh` scripts in `/examples` [subdirectory](https://github.com/doclet/texdoclet/tree/master/examples) of the github project for more examples.

### TeXDoclet output configuration

*TeXDoclet* doclet is configured by arguments passed to the doclet by the *javadoc* execution. There are a lot of defined parameters to affect the Latex document output. Print help to get a complete list of parameters you can pass to the *TeXDoclet* doclet :

Print help (TeXDoclet + javadoc help) :

	javadoc -docletpath target/TeXDoclet.jar -doclet org.stfm.texdoclet.TeXDoclet

or (TeXDoclet help only) :

	java -jar target/TeXDoclet.jar -h

	-title <title>            A title to use for the generated output document.
	-subtitle <title>         A subtitle for the output document. No -title will result in no title page.
	-output <outfile>         Specifies the output file to write to. If none specified, the default is docs.tex in the current directory.
	-docclass <class>         LaTeX2e document class, `report' is the default.
	-doctype <type>           LaTeX2e document style, `headings' is the default.
	-classfilter <name>       The name of a class implementing the ClassFilter interface.
	-date <date string>       The value to use for the document date.
	-author <author>          Specifies string to use for document Author.
	-texinit <file>           LaTeX2e statements included before \begin{document}.
	-texsetup <file>          LaTeX2e statements included after \begin{document} \maketitle (if title was specified).
	-texintro <file>          LaTeX2e statements included after table of contents
	-texfinish <file>         LaTeX2e statements included before \end{document}.
	-texpackage <file>        LaTeX2e statements included before packages' \chapter.
	-setup <file>             A setup file included before \begin{document}.
	-twosided                 Print twosided.
	-serial                   Do print Serializable information.
	-nosummaries              Do print summaries of fiels, constructors and methods.
	-nofieldsummary           Do not print field summaries
	-noconstructorsummary     Do not print constructor summaries
	-noinherited              Do not include inherited API information in output.
	-shortinherited           Prints a short inheritance, only the member name (not the whole signature)
	-noindex                  Do not create index.
	-tree                     Create a class tree.
	-treeindent <float>       Indent <float>cm i the class tree. Default is 1cm.
	-hyperref                 Use the hyperref package.
	-pdfhyperref              Use the hyperref package with pdf. Overrides -hypertex.
	-version                  Includes version-tags .
	-hr                       Prints horizontal rows in the output (to get a better? view).
	-include                  Creates output without latex initiation (writes it in initdocsinclude.tex), titlepage, contents.
	-sectionlevel <level>     Specifies the highest level of sections (either "subsection", "section" or "chapter").
	-imagespath               Path to the texdoclet_images dir (absolute or relative to the output document .tex file).

Previous versions
-----------------

- The intitial project of Greg Wonderly is available here : <http://java.net/projects/texdoclet>.
- Its [revision](http://egee-jra1-integration.web.cern.ch/egee-jra1-integration/repository/texdoclet/1.3/share/README.txt) by Soeren Caspersen you find here : <http://egee-jra1-integration.web.cern.ch/egee-jra1-integration/repository/texdoclet>.

