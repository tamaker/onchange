import onChange from 'on-change';


var arr1 = {"data": [
    {
      "ID": "9",
      "ExerciseName": "Cow, Dog Stretch",
      "VideoURL2": "http://www.youtube.com/embed/d5dqNU3S-Ag",
      "Category1": "",
      "Category2": "",
      "Desc": "<ol>\r\n<li>Get on all fours in quadruped with your head in a neutral position looking down at the floor.</li>\r\n<li>Bring your chin and head upwards while you drop your back downwards in a saddle position. Hold the stretch.</li>\r\n</ol>\r\n<p>Reps: 5-10 | Sets: 2-3 | Hold Time: 3 - 5 seconds | How Often: 2-3 times per day</p>",
      "ExerciseImages": "1407867387-cow-dog-stretch.jpg",
      "VideoURL": "https://vimeo.com/100858712",
      "Tags": "back, upper body extension, lumbar, spine, cow, dog, DDD, herniated disc, HNP",
      "DatePublished": "6/1/2014",
      "DateUpdated": "10/21/2022",
      "Category3": ""
    },
    {
      "ID": "17",
      "ExerciseName": "Ankle Alphabet",
      "VideoURL2": "http://www.youtube.com/embed/J17yIn5c_6E",
      "Category1": "Ankle & Foot",
      "Category2": "Knee & Leg",
      "Desc": "<ol>\r\n<li>With your legs out in front of you, place a roll just under your ankle so your heel can move freely.</li>\r\n<li>Moving only at your ankle, draw letters with your foot.</li>\r\n</ol>\r\n<p>Reps: 10-15 | Sets: 2-3 | Which Side: Both | Hold Time: 1-2 seconds | How Often: 2-3 times per day</p>\r\n<!--EndFragment-->",
      "ExerciseImages": "1426346443-ankle-alphabet_new.jpg",
      "VideoURL": "https://vimeo.com/100758465",
      "Tags": "ankle stretch, plantarflexion, ankle alphabet, ankle ROM, dorsiflexion, inversion, eversion, ankle sprain, TKA, THA",
      "DatePublished": "4/22/2014",
      "DateUpdated": "09/08/2019",
      "Category3": ""
    }
]}

const object1 = {
	foo: false,
	a: {
		b: [
			{
				c: false
			}
		]
	}
};



console.log(arr1.data[0].ExerciseName);

var index=0;

const watchedObject = onChange(object1, function (path, value, previousValue, applyData) {
	console.log('Object changed:', ++index);
	console.log('this:', this);
	console.log('path:', path);
	console.log('value:', value);
	console.log('previousValue:', previousValue);
	console.log('applyData:', applyData);
});

watchedObject;



setTimeout(function(){
    console.log(watchedObject)
    watchedObject.foo=true;
    watchedObject.a.b[0].c=true;
    //console.log(object1.foo);
    //arr1.data[0].ExerciseName = 'AJADKFAJDFAJDKFAJDF';
    //console.log(arr1.data[0].ExerciseName)
}, 1000)