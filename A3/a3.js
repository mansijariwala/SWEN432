



arthur: [A3] % mongoimport --db BoatHire --collection reserves --file reserves_17.json ;
connected to: 127.0.0.1
2017-05-09T13:53:02.815+1200 check 9 14
2017-05-09T13:53:02.815+1200 imported 14 objects
arthur: [A3] % mongo;
MongoDB shell version: 2.6.7
connecting to: test
> show dbs ;
BoatHire  0.031GB
admin     (empty)
local     0.031GB
test      0.031GB
> use BoatHire ;
switched to db BoatHire


Question 1.
a)

> db.reserves.update({'marina.name':{$regex:/^Port/}}, {$set:{'marina.name':"Port Nicholson"},$currentDate: {lastModified: true}},{multi: true});
WriteResult({ "nMatched" : 7, "nUpserted" : 0, "nModified" : 6 })

> db.reserves.find ({'marina.name':{$regex:/^Port/}});
{ "_id" : ObjectId("54f10525f60cb24112233f18"), "marina" : { "name" : "Port Nicholson", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Mermaid", "number" : 919, "color" : "white", "driven_by" : [ "sail", "motor" ] }, "sailor" : { "name" : "Milan", "sailorId" : 818, "skills" : [ "row", "sail", "motor", "first aid" ], "address" : "Wellington" }, "date" : "2017-03-16" }, "lastModified" : ISODate("2017-05-09T01:57:07.712Z") }
{ "_id" : ObjectId("54f1058af60cb24112233f1a"), "marina" : { "name" : "Port Nicholson", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Mermaid", "number" : 919, "color" : "white", "driven_by" : [ "sail", "motor" ] }, "sailor" : { "name" : "James", "sailorId" : 707, "skills" : [ "row", "sail", "motor", "fish" ], "address" : "Wellington" }, "date" : "2017-03-17" }, "lastModified" : ISODate("2017-05-09T01:57:07.712Z") }
{ "_id" : ObjectId("54f10654f60cb24112233f1b"), "marina" : { "name" : "Port Nicholson", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Red Cod", "number" : 616, "color" : "yellow", "driven_by" : [ "sail", "motor" ] }, "sailor" : { "name" : "James", "sailorId" : 707, "skills" : [ "row", "sail", "motor", "fish" ], "address" : "Wellington" }, "date" : "2017-03-21" }, "lastModified" : ISODate("2017-05-09T01:57:07.712Z") }
{ "_id" : ObjectId("54f10d18f60cb24112233f1c"), "marina" : { "name" : "Port Nicholson", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Pretty Lady", "number" : 515, "color" : "pink", "driven_by" : [ "sail" ] }, "sailor" : { "name" : "Peter", "sailorId" : 111, "skills" : [ "row", "sail", "motor" ], "address" : "Upper Hutt" }, "date" : "2017-03-17" }, "lastModified" : ISODate("2017-05-09T01:57:07.712Z") }
{ "_id" : ObjectId("54f10e7bf60cb24112233f1f"), "marina" : { "name" : "Port Nicholson", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Night Breeze", "number" : 818, "color" : "black", "driven_by" : [ "row" ] }, "sailor" : { "name" : "Charmain", "sailorId" : 999, "skills" : [ "row" ], "address" : "Upper Hutt" }, "date" : "2017-03-20" }, "lastModified" : ISODate("2017-05-09T01:57:07.712Z") }
{ "_id" : ObjectId("54f10ebbf60cb24112233f20"), "marina" : { "name" : "Port Nicholson", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Night Breeze", "number" : 818, "color" : "black", "driven_by" : [ "row" ] }, "sailor" : { "name" : "Charmain", "sailorId" : 999, "skills" : [ "row" ], "address" : "Upper Hutt" }, "date" : "2017-03-21" }, "lastModified" : ISODate("2017-05-09T01:57:07.712Z") }
{ "_id" : ObjectId("57161c16b6169855c3bd18cd"), "marina" : { "name" : "Port Nicholson", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Night Breeze", "number" : 818, "color" : "black", "driven_by" : [ "row" ] }, "sailor" : { "name" : "Gwendolynn", "sailorId" : 777, "skills" : [ "row", "sail", "motor", "dance" ], "address" : "Masterton" }, "date" : "2017-03-28" }, "lastModified" : ISODate("2017-05-09T01:57:07.712Z") }


b)

> db.reserves.find({_id:ObjectId("54f102de0b54b61a031776ed")});
{ "_id" : ObjectId("54f102de0b54b61a031776ed"), "marina" : { "name" : "Sea View", "location" : "Petone" }, "reserves" : { "boat" : { "name" : "Flying Dutch", "numbver" : 313, "color" : "blue", "driven_by" : [ "sail" ] }, "sailor" : { "name" : "James", "sailorId" : 707, "skills" : [ "row", "sail", "motor", "fish" ], "address" : "Wellington" }, "date" : "2017-03-15" } }

> db.reserves.update({_id:ObjectId("54f102de0b54b61a031776ed")},{$rename: {'reserves.boat.numbver':'reserves.boat.number'}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

> db.reserves.find({_id:ObjectId("54f102de0b54b61a031776ed")});
{ "_id" : ObjectId("54f102de0b54b61a031776ed"), "marina" : { "name" : "Sea View", "location" : "Petone" }, "reserves" : { "boat" : { "name" : "Flying Dutch", "color" : "blue", "driven_by" : [ "sail" ], "number" : 313 }, "sailor" : { "name" : "James", "sailorId" : 707, "skills" : [ "row", "sail", "motor", "fish" ], "address" : "Wellington" }, "date" : "2017-03-15" } }


c)

> db.reserves.insert({"marina" : { "name" : "Port Nicholson"}, "reserves" : { "boat" : { "number" : 717 , "name" : "Tarakihi", "color" : "red", "driven_by" : [ "row, motor" ] }, "sailor" : { "Eileen" : "Paul", "sailorId" :  919 ,"skills" : ["sail", "motor", "swim"],"address" : "Lower Hutt"}, "date" : "2017-03-25" }});
WriteResult({ "nInserted" : 1 })


> db.reserves.find({'reserves.date':"2017-03-25"});
{ "_id" : ObjectId("591694ed367c5cccfdb4819d"), "marina" : { "name" : "Port Nicholson" }, "reserves" : { "boat" : { "number" : 717, "name" : "Tarakihi", "color" : "red", "driven_by" : [ "row, motor" ] }, "sailor" : { "Eileen" : "Paul", "sailorId" : 919, "skills" : [ "sail", "motor", "swim" ], "address" : "Lower Hutt" }, "date" : "2017-03-25" } }




d)
> db.reserves.insert({ "marina" : { "name" : "Port Nicholson", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Dolphin", "number" : 110, "color" : "white", "driven_by" : [ "sail, motor" ] }, "sailor" : { "name" : "Gwendolynn", "sailorId" : 777, "skills" : [ "row", "sail", "motor", "dance" ], "address" : "Masterton" }, "date" : "2017-03-29" } });
WriteResult({ "nInserted" : 1 })

> db.reserves.find({'reserves.date':"2017-03-29"});
{ "_id" : ObjectId("591122f6691dbfd2648e4c41"), "marina" : { "name" : "Port Nicholson", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Dolphin", "number" : 110, "color" : "white", "driven_by" : [ "sail, motor" ] }, "sailor" : { "name" : "Gwendolynn", "sailorId" : 777, "skills" : [ "row", "sail", "motor", "dance" ], "address" : "Masterton" }, "date" : "2017-03-29" } }



e)
> db.reserves.insert({ "marina" : { "name" : "", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Dolphin", "number" : 110, "color" : "white", "driven_by" : [ "sail, motor" ] }, "sailor" : { "name" : "Paul", "sailorId" : 110, "skills" : ["row", "swim"], "address" : "Upper Hutt" }, "date" : "2017-03-31" } });
WriteResult({ "nInserted" : 1 })

> db.reserves.find({'reserves.date':"2017-03-31"});
{ "_id" : ObjectId("5911378663301c27ebb6efe8"), "marina" : { "name" : "", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Dolphin", "number" : 110, "color" : "white", "driven_by" : [ "sail, motor" ] }, "sailor" : { "name" : "Paul", "sailorId" : 110, "skills" : [ "row", "swim" ], "address" : "Upper Hutt" }, "date" : "2017-03-31" } }
>



f)

i.
> db.reserves.createIndex( { 'reserves.sailor.sailorId': 1 , 'reserves.date': 1}, { unique: true } );
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 2,
        "numIndexesAfter" : 3,
        "ok" : 1
}


ii.


> db.reserves.createIndex( { 'reserves.boat.number': 1 , 'reserves.date': 1}, { unique: true } );
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}


iii.

> db.reserves.getIndexes();
[
        {
                "v" : 1,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "BoatHire.reserves"
        },
        {
                "v" : 1,
                "unique" : true,
                "key" : {
                        "reserves.boat.number" : 1,
                        "reserves.date" : 1
                },
                "name" : "reserves.boat.number_1_reserves.date_1",
                "ns" : "BoatHire.reserves"
        },
        {
                "v" : 1,
                "unique" : true,
                "key" : {
                        "reserves.sailor.sailorId" : 1,
                        "reserves.date" : 1
                },
                "name" : "reserves.sailor.sailorId_1_reserves.date_1",
                "ns" : "BoatHire.reserves"
        }
]


Insert two documents with same boat number in the same date.The duplicate key error index proves that the index is working :

> db.reserves.insert({ "marina" : { "name" : "Port Nicholson ", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Dolphin", "number" : 10, "color" : "white", "driven_by" : [ "sail, motor" ] }, "sailor" : { "name" : "Paul", "sailorId" : 110, "skills" : ["row", "swim"], "address" : "Upper Hutt" }, "date" : "2018-03-30" } });
WriteResult({ "nInserted" : 1 })
> db.reserves.insert({ "marina" : { "name" : "Evans Bay ", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Dolphin", "number" : 10, "color" : "white", "driven_by" : [ "sail, motor" ] }, "sailor" : { "name" : "Paul", "sailorId" : 10, "skills" : ["row", "swim"], "address" : "Upper Hutt" }, "date" : "2018-03-30" } });
WriteResult({
        "nInserted" : 0,
        "writeError" : {
                "code" : 11000,
                "errmsg" : "insertDocument :: caused by :: 11000 E11000 duplicate key error index: BoatHire.reserves.$reserves.boat.number_1_reserves.date_1  dup key: { : 10.0, : \"2018-03-30\" }"
        }
})



Insert two documents with same sailorId in the same date. The duplicate key error index proves that the index is working :

> db.reserves.insert({ "marina" : { "name" : "Port Nicholson ", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Dolphin", "number" : 2, "color" : "white", "driven_by" : [ "sail, motor" ] }, "sailor" : { "name" : "Paul", "sailorId" : 110, "skills" : ["row", "swim"], "address" : "Upper Hutt" }, "date" : "2018-03-3" } });
WriteResult({ "nInserted" : 1 })
> db.reserves.insert({ "marina" : { "name" : "Port Nicholson ", "location" : "Wellington" }, "reserves" : { "boat" : { "name" : "Dolphin", "number" : 3, "color" : "white", "driven_by" : [ "sail, motor" ] }, "sailor" : { "name" : "Paul", "sailorId" : 110, "skills" : ["row", "swim"], "address" : "Upper Hutt" }, "date" : "2018-03-3" } });
WriteResult({
        "nInserted" : 0,
        "writeError" : {
                "code" : 11000,
                "errmsg" : "insertDocument :: caused by :: 11000 E11000 duplicate key error index: BoatHire.reserves.$reserves.sailor.sailorId_1_reserves.date_1  dup key: { : 110.0, : \"2018-03-3\" }"
        }
})





Question 2
a)
> db.reserves.count();
17

b)
> db.reserves.count({'marina.name':"Port Nicholson"});
9


c)
> db.reserves.distinct('reserves.sailor.name');
[
        "James",
        "Peter",
        "Milan",
        "Eileen",
        "Charmain",
        "Gwendolynn",
        "Paul"
]


d)
> db.reserves.distinct('marina.name', {'reserves.date': "2017-03-16" } );
[ "Sea View", "Port Nicholson" ]
>
> db.reserves.distinct('reserves.boat.name' ,  {'reserves.date': "2017-03-16" });
[ "Flying Dutch", "Mermaid" ]
>
> db.reserves.distinct('reserves.sailor.name',  {'reserves.date': "2017-03-16" });
[ "Peter", "Milan" ]




>  db.reserves.find({"reserves.date":"2017-03-16"},{ "marina.name": 1, "reserves.boat.name": 1,"reserves.sailor.name":1, "_id":0 })
{ "marina" : { "name" : "Sea View" }, "reserves" : { "boat" : { "name" : "Flying Dutch" }, "sailor" : { "name" : "Peter" } } }
{ "marina" : { "name" : "Port Nicholson" }, "reserves" : { "boat" : { "name" : "Mermaid" }, "sailor" : { "name" : "Milan" } } }
>







e)

> db.reserves.distinct('reserves.sailor.name',{'reserves.sailor.skills':"swim"});
[ "Eileen", "Paul" ]


f)
>  db.reserves.distinct('reserves.sailor.name' , {'reserves.sailor.skills':{$size:3, $all:["row", "sail", "motor" ]}});
[ "Peter" ]


Question 3
a)


{

driver:[{
  driver_name :"milan",
  password:"mm77",
  mobile: 211111,
  current_position: "Upper Hutt",
  skill: ["Matangi"]
}],
vehicle:[{
  vehicle_id: "FA1122" ,
  status: "Upper Hutt ",
  type: "Matangi"
}],
timetable:[{
  line_name:  "Hutt Vale Line",
  service_no : 1 ,
    time: "0600",
    stop:  "Petone" ,
    latitude:-41.2865 ,
    longitude:  174.7762,
    distance:  0 ,
    depart: "Wellington"

},

{
  line_name:  "Hutt Vale Line",
  service_no : 1 ,
    time: "0601",
    stop:  "Woburn" ,
    latitude:-41.227,
    longitude:  174.8851,
    distance:  0 ,
    depart: "Petone"

}

],
datapoint:[
{
  line_name:  "Hutt Vale Line",
    service_no:  1,
    day:  "2017-03-22",
    sequence:  "2017-03-22 06:00:10+1300",
    latitude:  -41.227,
    longitude:  174.8851 ,
    speed:29.1

}
,
{
  line_name:  "Hutt Vale Line",
    service_no:  1,
    day:  "2017-03-22",
    sequence:  "2017-03-22 06:00:20+1300",
    latitude:  -41.227,
    longitude:  174.8851 ,
    speed:29.1

},
{
  line_name:  "Hutt Vale Line",
    service_no:  1,
    day:  "2017-03-22",
    sequence:  "2017-03-22 06:00:30+1300",
    latitude:  -41.227,
    longitude:  174.8851 ,
    speed:29.1

},
{
  line_name:  "Hutt Vale Line",
    service_no:  1,
    day:  "2017-03-22",
    sequence:  "2017-03-22 06:00:40+1300",
    latitude:  -41.227,
    longitude:  174.8851 ,
    speed:29.1

}
,
{
  line_name:  "Hutt Vale Line",
    service_no:  1,
    day:  "2017-03-22",
    sequence:  "2017-03-22 06:00:50+1300",
    latitude:  -41.227,
    longitude:  174.8851 ,
    speed:29.1

}
,
{
  line_name:  "Hutt Vale Line",
    service_no:  1,
    day:  "2017-03-22",
    sequence:  "2017-03-22 06:01:00+1300",
    latitude:  -41.227,
    longitude:  174.8851 ,
    speed:29.1

}
]
}

b)
The maximum number of instances in datapoint entity type depends on the travelling time in two city which is in the instances of timetable entity type . For example, the assumption here is that the train travels at 0600 from Wellington and arrives at Petone at 0601 which needs 60 seconds,  and the time gap in datapoint in every 10 seconds, that is to say 60/10=6 , so there will be 6 instances in the datapoint.


Question 4

arthur: [A3] % mongoimport --db BoatHire --collection marina --file marina_17.json ;
connected to: 127.0.0.1
2017-05-09T19:13:30.325+1200 imported 3 objects
arthur: [A3] % mongoimport --db BoatHire --collection sailor --file sailor_17.json ;
connected to: 127.0.0.1
2017-05-09T19:13:30.345+1200 imported 7 objects
arthur: [A3] % mongoimport --db BoatHire --collection boat --file boat_17.json ;
connected to: 127.0.0.1
2017-05-09T19:13:30.362+1200 check 9 13
2017-05-09T19:13:30.362+1200 imported 13 objects
arthur: [A3] % mongoimport --db BoatHire --collection res_ref --file res_ref_17.json ;
connected to: 127.0.0.1
2017-05-09T19:13:33.749+1200 check 9 15
2017-05-09T19:13:33.749+1200 imported 15 objects
arthur: [A3] % single-mongo start ;
Mongo server already running, pid 9912
arthur: [A3] % mongo;
MongoDB shell version: 2.6.7

a)



> db.sailor.distinct("name");
[
        "James",
        "Peter",
        "Milan",
        "Eileen",
        "Paul",
        "Charmain",
        "Gwendolynn"
]




b)


>  db.sailor.distinct('name' , {'skills':{$size:3, $all:["row", "sail", "motor" ]}});
[ "Peter" ]


Question 5
a)
> db.res_ref.find({'reserves.date':"2017-03-16"})
{ "_id" : ObjectId("54f92d5c7b2b4c977e827daf"), "marina" : "Sea View", "reserves" : { "boat" : 313, "sailor" : 111, "date" : "2017-03-16" } }
{ "_id" : ObjectId("54f92d707b2b4c977e827db2"), "marina" : "Port Nicholson", "reserves" : { "boat" : 919, "sailor" : 818, "date" : "2017-03-16" } }
>



> db.res_ref.distinct("marina" ,  {'reserves.date':"2017-03-16"});
[ "Sea View", "Port Nicholson" ]



> db.boat.distinct("name", {marina : "Sea View" , number:313});
[ "Flying Dutch" ]
>
> db.boat.distinct("name", {marina : "Port Nicholson" , number:919});
[ "Mermaid" ]

>
>
> db.sailor.distinct("name",{sailorId:111});
[ "Peter" ]
>
> db.sailor.distinct("name",{sailorId:818});
[ "Milan" ]




b)


> var curs = db.res_ref.find({'reserves.date':"2017-03-16"}) ;
> while (curs.hasNext()) {
... ref = curs.next()
...
... m= db.marina.findOne({
... name: ref.marina})
...
... b = db.boat.findOne({
... number: ref.reserves.boat})
...
... s = db.sailor.findOne({
... sailorId: ref.reserves.sailor})
...
... ret = {marinaName : m.name,boatName : b.name, sailorName :s.name}
... print(tojson(ret)) }
{
        "marinaName" : "Sea View",
        "boatName" : "Flying Dutch",
        "sailorName" : "Peter"
}
{
        "marinaName" : "Port Nicholson",
        "boatName" : "Mermaid",
        "sailorName" : "Milan"
}
