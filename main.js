quick_draw_data_array=["Pen","Paper","Book","Bottle","Tree", "Cat"];
random_no = Math.floor((Math.random()*quick_draw_data_array.length)+1);
console.log(random_no, quick_draw_data_array);

sketch = quick_draw_data_array[random_no];
console.log("Sketch to be drawn : ", sketch);
document.getElementById("sketch_to_be_drawn").innerHTML =  '<p id="sketch_to_be_drawn">Sketch To Be Drawn : '+sketch+'</p>';

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score: 0;