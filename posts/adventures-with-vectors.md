---  
title: 'Adventures with Vectors'
date: '2021-12-02'
---  

# Vectors: Pain... with direction

So basically, it turns out that these are *really* useful. I've been dabbling in game development for the past 3 years and have always brushed off vectors in favour of other cool, flashy things. In the past months, I've come to realise that vectors are the key to so many tasks that are seemingly impossible to pull off without being janky as all hell, and it turns out they are more than just XYZ coordinates.

## So... what are they?

When it all boils down, a vector is just an ordered set of numbers. If we boil it a little less, they are a construct of coordinates generally representing a direction, multiplied by a scale. We can use vectors across any number of dimensions, and the operations we use on them still work. For this blog post, I will mostly be looking at vectors in 3D space.

We can represent them with a series of values:  
{3, 0, 1}  
{2, 0}  
{10, 0, 43, 20, 323}  
  


### Unit Vectors
A unit vector is a vector which is represented in 0 - 1 space. This means that we have stripped the scale part out of our vector, giving us a pure direction.
For example, a vector of {38, 0, 0} would become {1, 0, 0}. Both of these vectors point the same way, but the unit vector always has a length of 1, whereas the original vector would have a length of 38.
