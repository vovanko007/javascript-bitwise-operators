/*
 *   Kinds of bitwise operators in JavaScript
 *
 *   << - left bitwise shift
 *   >> - right bitwise shift
 *   >>> - unsigned bitwise right shift
 *   ~ - bitwise complement (bitwise 'not'; bits inversion)
 *   ^ - XOR (bitwise exclusive 'or')
 *   | - IOR (inclusive bitwise 'or')
 *   & - bitwise 'and'
 *
 *   1. left bitwise shift (<<)
 *
 *      5 << 3 // 5 * 2 -> 10 * 2 -> 20 * 2 ->40
 *
 *      var i = 1 // 0001
 *
 *      i << 3 -> 0001 -> 0010 -> 0100 -> 1000
 *
 *   2. right bitwise shift(>>)
 *
 *       32 >> 3 // 32 / 2 -> 16 / 2 -> 8 / 2 -> 4
 *
 *      var i = 1 // 1000
 *
 *      i >> 3 -> 1000 -> 0100 -> 0010 -> 0001
 *
 *
 *   3. unsigned bitwise right shift (>>>)
 *
 *      32 >>> 3 // 32 / 2 -> 16 / 2 -> 8 / 2 -> 4
 *      -32 >>> 3 // infinity
 *
 *      var i = 8 // 1000
 *
 *      i >>> 3 -> 1000 -> 0100 -> 0010 -> 0001
 *
 *
 *   4. bitwise complement (bitwise 'not'; bits inversion) (~)
 *
 *      ~8
 *      var i = 8
 *      ~i; //-7
 *
 *      ~i // 1000 -. 0111 = -7
 *
 *
 *  5.  XOR (bitwise exclusive 'or') (^)
 *
 *      true -> 1
 *      false -> 0
 *
 *     false false -> false   0 0-> 0
 *     true true -> false     1 1-> 0
 *     true  false -> true    1 0-> 1
 *     false true -> true     0 1-> 1
 *
 *      var i = 5; //0101
 *      var i = 6; //0110
 *
 *      0101
 *      ^
 *      0110
 *      ----
 *      0011 = 3
 *
 *  6.  IOR (bitwise inclusive 'or') (|)
 *
 *      true -> 1
 *      false -> 0
 *
 *      false false -> false   0 0-> 0
 *      true  true  -> true    1 1-> 1
 *      true  false -> true    1 0-> 1
 *      false true  -> true    0 1-> 1
 *
 *      var i = 5; //0101
 *      var i = 6; //0110
 *
 *      0101
 *      |
 *      0110
 *      ----
 *      0111 = 7
 *
 *  7.  Bitwise 'and' (&)
 *
 *      true -> 1
 *      false -> 0
 *
 *      false false -> false   0 0-> 0
 *      true  true  -> true    1 1-> 1
 *      true  false -> false   1 0-> 0
 *      false true  -> false   0 1-> 0
 *
 *      var i = 5; //0101
 *      var i = 6; //0110
 *
 *      0101
 *      &
 *      0110
 *      ----
 *      0100 = 4
 *
 *
 */

var output = '';

function print(data) {
    output += '<h2>' + data + '</h2>';
    document.getElementById('output').innerHTML = output;
}

(function action() {
    leftBitwiseShiftTest();
    rightBitwiseShiftTest();
    unsignedRightBitwiseShiftTest();
    bitwiseNotTest()
    bitwiseXorTest()
    bitwiseIorTest()
    bitwiseAndTest()

})()
function leftBitwiseShiftTest() {
    var i = 8;
    /* 8 * 2 -> 16 * 2 -. 32 * 2 = 64 */
    print(i + ' << 3: ' + (i << 3)); //64
}

function rightBitwiseShiftTest() {
    var i = 32;
    /* 32 >> 4 // 32 / 2 -> 16 / 2 -> 8 / 2 -> 4 */
    print(i + ' >> 4: ' + (i >> 4)); //2
}

function unsignedRightBitwiseShiftTest() {
    var i = 32;
    var i2 = -32;
    print(i + ' >>> 4: ' + (i >>> 4));
    print(i2 + ' >>> 4: ' + (i2 >>> 4));
}

function bitwiseNotTest() {
    var i = 8;
    print('~' + i + ':' + (~i)); //-9
    print('~' + (-8) + ':' + (~-8)); //7
    print('change ' + i + ' sign: ' + (~i + 1 ));
    i = -8;
    print('change ' + i + ' sign: ' + (~i + 1 ));
}

function bitwiseXorTest() {
    var i = 5; //0101
    var i2 = 6; //0110
    var bitwiseFormat = '0101 ^ 0110 = 0011';
    var decimalFormat = i + ' ^ ' + i2 + ' = ' + (i ^ i2);
    print(bitwiseFormat + ' => ' + decimalFormat);
}


function bitwiseIorTest() {
    var i = 5; //0101
    var i2 = 6; //0110
    var bitwiseFormat = '0101 | 0110 = 0111';
    var decimalFormat = i + ' | ' + i2 + ' = ' + (i | i2);
    print(bitwiseFormat + ' => ' + decimalFormat);
}


function bitwiseAndTest() {
    var i = 5; //0101
    var i2 = 6; //0110
    var bitwiseFormat = '0101 & 0110 = 0100';
    var decimalFormat = i + ' & ' + i2 + ' = ' + (i & i2);
    print(bitwiseFormat + ' => ' + decimalFormat);
}