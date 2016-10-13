import unittest
import WorldBuilder


class TestDatabaseOperations(unittest.TestCase):


    def test_World__Add___ItShouldWork(self):
	worlds = WorldBuilder.WorldRepo()
	
	world = WorldBuilder.World()
	world.name = "testWorld"
	world.description = "description"
	record_id = worlds.add(world)


	self.assertTrue(worlds.recordExists(record_id))


    def getTestScriptRecord(self):
	worlds = WorldBuilder.WorldRepo()
	
	world = WorldBuilder.World()
	world.name = "testWorld"
	world.description = "description"
	record_id = worlds.add(world)
	self.assertTrue(worlds.recordExists(record_id))

	script = WorldBuilder.WorldScript()
	script.name = "my script"
	script.description = "stuff"
	script.javascript = "js"
	script.blocklyXml = "foo"
	script.worldId = record_id
	return script
		

    def test_WorldScript__Add___ItShouldWork(self):
	script = self.getTestScriptRecord()
	scripts = WorldBuilder.WorldScriptRepo()
	scriptRecordID = scripts.add(script)
	self.assertTrue(scripts.recordExists(scriptRecordID))

    def test_WorldScript__Delete___ItShouldWork(self):
	script = self.getTestScriptRecord()
	scripts = WorldBuilder.WorldScriptRepo()
	scriptRecordID = scripts.add(script)
	self.assertTrue(scripts.recordExists(scriptRecordID))
	scripts.delete(scriptRecordID)
	self.assertTrue(not scripts.recordExists(scriptRecordID))
	
    def test_WorldScript__Get___ItShouldWork(self):
	script = self.getTestScriptRecord()
	scripts = WorldBuilder.WorldScriptRepo()
	scriptRecordID = scripts.add(script)
	self.assertTrue(scripts.recordExists(scriptRecordID))
	testRecord = scripts.get(scriptRecordID)






    def test_World__Delete___ItShouldWork(self):
	worlds = WorldBuilder.WorldRepo()
	
	world = WorldBuilder.World()
	world.name = "testWorld"
	world.description = "description"
	record_id = worlds.add(world)
	self.assertTrue(worlds.recordExists(record_id))
	worlds.delete(record_id)
	self.assertTrue(worlds.recordExists(record_id)==False)

    def test_World__Get___ItShouldWork(self):
	worlds = WorldBuilder.WorldRepo()
	
	world = WorldBuilder.World()
	world.name = "testWorld"
	world.description = "description"
	record_id = worlds.add(world)

	self.assertTrue(worlds.recordExists(record_id))

	world2 = worlds.get(record_id)
	self.assertTrue(world.name == world2.name)
	self.assertTrue(world.description == world2.description)
	self.assertTrue( record_id == world2._id)


    def test_World__Get___ItShouldWork2(self):
	worlds = WorldBuilder.WorldRepo()

	self.assertTrue(worlds.recordExists("57fb27dbf6eda60d3b12da41"))


    def test_World__Update___ItShouldWork(self):
	worlds = WorldBuilder.WorldRepo()
	
	world = WorldBuilder.World()
	world.name = "testWorld"
	world.description = "description"
	record_id = worlds.add(world)

	self.assertTrue(worlds.recordExists(record_id))

	w2 = worlds.get(record_id)
	w2.name = "foo"
	w2.description = "bar"
	
	worlds.update(w2)

	w3 = worlds.get(w2._id)

	
	self.assertTrue(w2.name == w3.name)
	self.assertTrue(w2.description == w3.description)
	self.assertTrue( record_id == w3._id)


    def tearDown(self):
	worlds = WorldBuilder.WorldRepo()		
	worlds.deleteAll()		

	scripts = WorldBuilder.WorldScriptRepo()
	scripts.deleteAll()
	



    def test_GetAll___ItShouldWork(self):
	worlds = WorldBuilder.WorldRepo()
	for i in range(0,10):			
		world = WorldBuilder.World()
		world.name = "testWorld"
		world.description = "description"
		record_id = worlds.add(world)

	results = worlds.getAll()
	self.assertTrue(len(results) >= 10)













if __name__ == '__main__':
    unittest.main()

