from flask import Flask
from flask import render_template
from flask import request
import random
import WorldBuilder

path_to_save = "./static/3DWorld/"

app = Flask(__name__)

@app.route("/")
def world_list():
	worlds = WorldBuilder.WorldRepo()
	records = worlds.getAll()
	return render_template('world_list.html', worlds = records)


@app.route("/edit_world")
def edit_world():
	worlds = WorldBuilder.WorldRepo()
	id = request.args.get('id', '')
	r = worlds.get(id)
	return render_template('edit_world.html', record = r)

@app.route("/list_scripts")
def list_scripts():
	scripts = WorldBuilder.WorldScriptRepo()
	recordID = request.args.get('worldID', '')
	recordList = scripts.getScriptsForWorld(recordID)
	return render_template('list_scripts.html', records= recordList, world_id = recordID)

@app.route("/create_world")
def create_world():
	name = "new world"
	description = ""
	worlds = WorldBuilder.WorldRepo()
	record = WorldBuilder.World()

	record.name = name
	record.description = description
	recordID = worlds.add(record)
	r = worlds.get(recordID)

	return render_template('edit_world.html', record = r)

@app.route("/update_world", methods=['POST'])
def update_world():
	name = request.form['name']
	description = request.form['description']
	record_id = request.form['id']
	worlds = WorldBuilder.WorldRepo()
	record = worlds.get(record_id)

	record.name = name
	record.description = description
	worlds.update(record)

	return "done"

@app.route("/delete_world", methods=['POST'])
def delete_world():
	record_id = request.form['id']
	worlds = WorldBuilder.WorldRepo()
	worlds.delete(record_id)
	return "done"

@app.route("/delete_script", methods=['POST'])
def delete_script():
	record_id = request.form['id']
	t = WorldBuilder.WorldScriptRepo()
	t.delete(record_id)
	return "done"

@app.route("/create_script")
def create_script():
	scripts = WorldBuilder.WorldScriptRepo()
	r = WorldBuilder.WorldScript()
	r.name = "new script"
	r.description = ""
	r.javascript = "//code"
	r.blocklyXml = "<xml />"
	recordID = request.args.get('worldId', '')
	r.worldId = recordID

	recordID = scripts.add(r)
	r2 = scripts.get(recordID)

	return render_template('edit_script.html', record = r2)

@app.route("/edit_script")
def edit_script():
	scripts = WorldBuilder.WorldScriptRepo()
	id = request.args.get('id', '')
	r = scripts.get(id)
	return render_template('edit_script.html', record = r)


def get3DWorldContent(script_list):
	return render_template("view_3d_world.html",scriptList = script_list, k=random.random());
	 
@app.route("/view_3d_world")
def view_3d_world():
	id = request.args.get('recordID')
	script_list = []
	script_list.append(id)
	return get3DWorldContent(script_list)

def write_js_code(jscode,id):
	file = open(path_to_save + id +".js", "w")
	file.write(jscode)
	file.close()

@app.route("/draw_world_scripts")
def draw_world_scripts():
	scripts = WorldBuilder.WorldScriptRepo()
	recordID = request.args.get('worldId', '')
	print(recordID)

	recordList = scripts.getScriptsForWorld(recordID)

	script_list = []

	for record in recordList:
		script_list.append(record["_id"])				
		write_js_code(record["javascript"],str(record["_id"]))

	return get3DWorldContent(script_list)
	
@app.route("/view_cardboard")
def view_cardboard():
	id = request.args.get('recordID')
	return render_template("cardboard.html",recordID = id);

@app.route("/save_js", methods=['POST'])
def save_js():
	jscode = request.form['jscode']
    	id = request.form['id']
	write_js_code(jscode,id)
	return "done"

@app.route("/update_script", methods=['POST'])
def update_script():
	scripts = WorldBuilder.WorldScriptRepo()
	record_id = request.form['id']
	s = scripts.get(record_id)
	s.name = request.form['name']
	s.description = request.form['description']
	s.javascript = request.form['javascript']
	s.blocklyXml = request.form['blocklyXml']
	scripts.update(s)

	return "done"



if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)


