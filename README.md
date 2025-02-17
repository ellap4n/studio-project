# studio-project
(still very much in progress I haven't coded a lot of it yet)
the URL for my webpage is: https://ellap4n.github.io/studio-project/
## Formulating the idea
I'm interested in art from rules and glitches. Both are topics with endless possibilities within. 

#### Art from rules
The idea for this topic I have is for the user to answer a prompt, and the code will scan the string for specific characters or rules (# of vowels etc.) which will trigger different outcomes. Each response would output a unique outcome based on these 'rules'. 
Rules aer fundamental in code as esseantially everything you write in code is a rule - its unchanging and cannot be removed once determined. 

#### Glitches 
I really liked my workshop 3 exploration - the morer you click, the more tinted the images became. I could replace the tint with glitches - the more you click, the more the image glitches, playing into the idea of entropy - where the chaos, or entropy of the universe tends to a maximum. The more you interact with something, the less ordered it becomes. Consumerism - use breaks things down, but if you leave it as it is it will remain pristine. Naivety. The more you think, the more problems you discover. 

Im also intrigued by the idea of 'designing imperfection' which is actual an essential technique in art that focuses on realism. to be real is to be imperfect.

## Going with the glitch idea:
Each time the user clicks, a new glitch will appear. The idea is that the user can decide if they want to introduce more distortion into the image or not. 
The distortions will begin small at first, and eventually become very distorted the more the user clicks. 
I am using a mouse count to keep track of the number of clicks, and triggering special events based on these. 


### User image input:
the whole idea is how glitches can manipulate the image and so I decided to create a environment where the user can upload their own image. Found the documentation at:https://p5js.org/reference/p5/createFileInput/
the intro page saya to 'upload an image you like' which prompts the user to upload something they like the original look of. 
### Erasure
https://p5js.org/reference/p5/erase/

### Screen damage

% (modulus) is something I've used before, and a good way to trigger things on intervaled counts. I have set the screen damage effect every 5 clicks. 
```
 if (mouseCount%5 === 0) {
    let r, g, b, c, m;
    let rgb = [];
    //error colours into array
    r = [255, 0, 0];
    g = [0, 255, 0];
    b = [0, 0, 255];
    c = [0, 251, 255];
    m = [255, 0, 191];
    rgb.push(r);
    rgb.push(g);
    rgb.push(b);
    rgb.push(c);
    rgb.push(m);
    fill(random(rgb));
    rect(random(windowWidth/3, windowWidth), 0, random(0.1, 0.3), windowHeight);
  }
```
during the live lecture, one classmate said she didn't quite notice the glitch - which is the effect I want at the start, but I also wanted to trigger a larger "dead screen" portion

### Ripple/Noise 
I want to try experiment with ripple and noise using pixel displacement methods. 

## Sound 
https://p5js.org/reference/p5/loadSound/
https://freesound.org/people/AlienXXX/sounds/193703/
https://freesound.org/people/Xiko__/sounds/711112/
https://freesound.org/people/Toine/sounds/7682/
https://freesound.org/people/SilverIllusionist/sounds/696593/

https://www.youtube.com/watch?v=NCCHQwNAN6Y
https://p5js.org/reference/p5.Amplitude/getLevel/

### Variation 
After implementing this function, it worked, but I noticed there was barely any variation in my test object (circle size). I tried mapping the sound to different ranges but it still didn't variate much, which was weird - until I found the sound file again
![image](https://github.com/user-attachments/assets/486ce8df-467a-4baf-8447-5a12f87b0706)
Here is the wave form of the sound file - there was barely any amplitude variation... which explained why my object did not vary much. 
I have decided to find a different glitchy noise - but one with huge variations to the amplitude. 
This Sound I found:
[https://freesound.org/people/staticpony1/sounds/249604/](https://freesound.org/people/KodyTron/sounds/641923/)

had a much prettier waveform, so I will use this as the new static sound. 

#### cueing colours
the sound clip is 6.7 seconds long, 
https://p5js.org/reference/p5.SoundFile/addCue/

#### Line Style



## Save File 
After the online class 12/02 I got the suggestion to create the save function where it saves after a time interval so the image you want to be 'saved' is different 

## Final Touches
Finally, I made the cursor a hand, to visually prompt the user to 'click'

