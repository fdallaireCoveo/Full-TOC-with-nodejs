import argparse , os
from os import walk
from HTMLParser import HTMLParser

class Templates(object):
	def templateDeclaration(self, id):
		return 'Coveo.Ui.TemplateCache.registerTemplate("'+ id +'", '

	def functionNameStart(self):
		raise NotImplementedError("Abstract class not implemented");

class UnderscoreTemplate(Templates):
	def functionNameStart(self):
		return "_.template("

class HandleBarsTemplate(Templates):
	def functionNameStart(self):
		return "Handlebars.compile("

class JsRenderTemplate(Templates):
	def functionNameStart(self):
		return "$.templates("

def tmpl(type):
	if type == "underscore":
		return underscore
	if type == "handlebars":
		return handlebars
	if type == "jsrender":
		return jsrender

class TemplateParser(HTMLParser):
	def __init__(self):
		HTMLParser.__init__(self)
		self.tmpl = tmpl(args.t)
		self.output = "";
		self.writeAllowed = 0
		self.ids = []
	
	def handle_starttag(self, tag, attrs):
		if tag == "script":
			foundId = 0
			for attr, value in attrs:
				if attr == "id":
					foundId = 1
					if value in self.ids:
						print 'Duplicate id ' + value + " on " + tag
					else:
						self.writeAllowed = 1
						self.ids.append(value)
						self.append(self.tmpl.templateDeclaration(value))
						self.append(self.tmpl.functionNameStart())
						self.append("\n")
						self.append("\"")
			if foundId == 0:
				print tag + ' has no id attribute'

	def handle_data(self, data):
		if self.writeAllowed == 1:
			data = data.replace('"' , '\\"')
			data = data.replace('\\\\"' , '\\"')
			data = data.replace("\t" , "")
			data = data.replace("_script" , "script")
			split = data.split("\n")
			for line in split:
				self.append(line.strip())

	def handle_endtag(self, tag):
		if self.writeAllowed == 1:
			self.append("\"))\n")
			self.writeAllowed = 0

	def append(self,line):
		self.output = self.output + line

	def getOutput(self):
		return self.output

	def resetOutput(self):
		self.output = ""

if __name__ == "__main__":
	optionsParser = argparse.ArgumentParser(description='Convert html templates to their expected javascript ouput')
	optionsParser.add_argument(
	  '--t', 
		action='store' , 
	  default='underscore', 
	  choices=['underscore','handlebars','jsrender'] , 
	  help='Type of the script to output. Default is underscore')

	optionsParser.add_argument(
    '--o',
    default='generated.js',
		help='Destination file to output the templates. Default to generated.js')

	optionsParser.add_argument(
		'--f',
		default='templates',
		help='Destination folder to output the templates. Default to templates')

	optionsParser.add_argument(
		'--i' ,
		default = 'templates' ,
		help='Input folder containing html files that need to be parsed. Default to templates')

	args = optionsParser.parse_args()

	underscore = UnderscoreTemplate()
	handlebars = HandleBarsTemplate()
	jsrender = JsRenderTemplate()

	tmplParser = TemplateParser()
	toWrite = ""

	for dirs, subdirs, filesnames in os.walk(args.i):
		for filename in filesnames:
			with open(os.path.join(dirs,filename) , 'r') as f:
				tmplParser.feed(f.read())
				toWrite = toWrite + tmplParser.getOutput()
				tmplParser.resetOutput()

	if not os.path.exists(args.f):
	  os.makedirs(args.f)

	outFile = open(os.path.join(args.f,args.o) , 'w')
	outFile.write(toWrite)

