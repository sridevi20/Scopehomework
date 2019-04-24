const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let park;

  beforeEach(function () {

    dinosaur1 = new Dinosaur('Velociraptor', 'carnivore', 60);
    dinosaur2 = new Dinosaur('Dreadnoughtus', 'Herbivore', 50);
    dinosaur3 = new Dinosaur('Pachycephalosaurus', 'Herbivore', 40);
    dinosaur4 = new Dinosaur('Therizinosaurus', 'carnivore', 30);
    park = new Park('Jurassic', 20, []);
 });

  it('should have a name',function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic');
  });

  it('should have a ticket price',function() {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
    });

  it('should be able to remove a dinosaur from its collection', function(){
      park.removeDinosaur(dinosaur1);
      const actual = park.dinosaurs;
      assert.deepStrictEqual(actual, []);

  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
       park.findDinosaur(dinosaur);
      const actual = park.dinosaurs;
     assert.strictEqual(actual, [dinosaur1]);

  });

  it('should be able to find all dinosaurs of a particular species');

        park.findAllDinasour(dinosaur);
        const actual = park.dinosaurs;
        assert.strictEqual(actual, [this.species]);


  it('should be able to remove all dinosaurs of a particular species');

});
