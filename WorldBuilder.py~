from pymongo import MongoClient
from bson.objectid import ObjectId

def getDatabase():
	client = MongoClient(host='localhost', port=27017)
	database = client['world_builder']
	return database	


class World():
	def __init__(self):
		self.name = ""
		self.description = ""
		self._id = ObjectId()
		self.created_by = ""
		self.updated_by = ""

	def get_as_json(self):
		""" Method returns the JSON representation of the Project object, which can be saved to MongoDB """
		return self.__dict__
	

	@staticmethod 
	def build_from_json(data):
		w = World()
		w.name = data["name"]
		w.description = data["description"]
		w._id = data["_id"]
		w.created_by = data["created_by"]
		w.updated_by = data["updated_by"]

		return w







class WorldRepo():
	def __init__(self):
		self.current_user = "system"

	def checkRecordBeforeSave(self, record, newRecord):
		if(record.name == ""):
			raise ValueError("Name is required.")



	def add(self,record):
		if(record == None):
			raise ValueError("record is null")

		self.checkRecordBeforeSave(record, True)

		db = getDatabase()
		record.created_by = self.current_user
		result = db.worlds.insert_one(record.get_as_json())
		return result.inserted_id


	def recordExists(self,record_id):
		if(record_id == None):
			raise ValueError("record_id is null")

		recID = ObjectId(record_id)
		database = getDatabase()
		result = database.worlds.find({"_id":recID})

		return (result.count() > 0) 

	def delete(self, record_id):
		if(record_id == None):
			raise ValueError("record_id is null")

		if(not self.recordExists(record_id)):
			raise ValueError("Record does not exist")		


		recID = ObjectId(record_id)
		database = getDatabase()
		result = database.worlds.find({"_id":recID})
		database.worlds.remove(result[0])


	def get(self, record_id):
		if(record_id == None):
			raise ValueError("record_id is null")

		if(not self.recordExists(record_id)):
			raise ValueError("Record does not exist: " + record_id)		

		recID = ObjectId(record_id)
		database = getDatabase()
		result = database.worlds.find({"_id":recID})
		return World.build_from_json(result[0])

	def update(self, record):
		if(record == None):
			raise ValueError("record is null")

		self.checkRecordBeforeSave(record, False)

		if(not self.recordExists(record._id)):
			raise ValueError("Record does not exist")		


		record.updated_by = self.current_user
		db = getDatabase()
            	db.worlds.save(record.get_as_json())

	def deleteAll(self):
		db = getDatabase()
		db.worlds.remove()

	def getAll(self):
		db = getDatabase()
		cursor = db.worlds.find({})
	
		results = []

		for r in cursor:
			results.append(r)				
		
		return results





class WorldScript():
	def __init__(self):
		self.name = ""
		self.description = ""
		self.javascript = ""
		self.blocklyXml =  ""
		self._id = ObjectId()
		self.created_by = ""
		self.updated_by = ""
		self.worldId = ""

	def get_as_json(self):
		""" Method returns the JSON representation of the Project object, which can be saved to MongoDB """
		return self.__dict__
	

	@staticmethod 
	def build_from_json(data):
		w = WorldScript()
		w.name = data["name"]
		w.description = data["description"]
		w.javascript = data["javascript"]
		w.blocklyXml = data["blocklyXml"]
		w._id = data["_id"]
		w.created_by = data["created_by"]
		w.updated_by = data["updated_by"]
		w.worldId = data["worldId"]

		return w







class WorldScriptRepo():
	def __init__(self):
		self.current_user = "system"

	def checkRecordBeforeSave(self, record, newRecord):
		if(record.name == ""):
			raise ValueError("Name is required.")
		if(record.javascript == ""):
			raise ValueError("JavaScript is required.")
		if(record.blocklyXml == ""):
			raise ValueError("blocklyXml is required.")

		worlds = WorldRepo()
		if(not worlds.recordExists(record.worldId)):
			raise ValueError("World ID is not valid or does not exist")


	def add(self,record):
		if(record == None):
			raise ValueError("record is null")

		self.checkRecordBeforeSave(record, True)

		db = getDatabase()
		record.created_by = self.current_user
		result = db.worldScripts.insert_one(record.get_as_json())
		return result.inserted_id


	def recordExists(self,record_id):
		if(record_id == None):
			raise ValueError("record_id is null")


		recID = ObjectId(record_id)
		database = getDatabase()
		result = database.worldScripts.find({"_id":recID})

		return result.count() > 0 

	def delete(self, record_id):
		if(record_id == None):
			raise ValueError("record_id is null")

		if(not self.recordExists(record_id)):
			raise ValueError("Record does not exist")		


		recID = ObjectId(record_id)
		database = getDatabase()
		result = database.worldScripts.find({"_id":recID})
		database.worldScripts.remove(result[0])


	def get(self, record_id):
		if(record_id == None):
			raise ValueError("record_id is null")

		if(not self.recordExists(record_id)):
			raise ValueError("Record does not exist")		

		recID = ObjectId(record_id)
		database = getDatabase()
		result = database.worldScripts.find({"_id":recID})
		return WorldScript.build_from_json(result[0])

	def update(self, record):
		if(record == None):
			raise ValueError("record is null")

		self.checkRecordBeforeSave(record, False)

		if(not self.recordExists(record._id)):
			raise ValueError("Record does not exist")		


		record.updated_by = self.current_user
		db = getDatabase()
            	db.worldScripts.save(record.get_as_json())

	def deleteAll(self):
		db = getDatabase()
		db.worldScripts.remove()

	def getAll(self):
		db = getDatabase()
		cursor = db.worldScripts.find({})
	
		results = []

		for r in cursor:
			results.append(r)				
		
		return results


	def getScriptsForWorld(self,worldID):
		db = getDatabase()
		cursor = db.worldScripts.find({"worldId": worldID})
	
		results = []

		for r in cursor:
			results.append(r)				
		
		return results

  


