/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

var kClosest = function(points, k) {
    return points.sort((a, b) => getDistance(a) - getDistance(b)).slice(0, k);
};

const getDistance = function([a, b]) {
    return Math.sqrt((a * a) + (b * b));
}


 // var kClosest = function(points, k) {
 //    return points.sort((a,b) => (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1])).slice(0, k);
 // };

/* 
PLANNING --> 

1. SPECIFICATION -
  -->INPUTS: Our first input is an array list of elements where each element is a pair of integers representing x, y coordinates of a vegetarian restaurant in the city. Our second input is an integer representing the number of restaurants that should be returned to the customer.
  -->OUTPUTS: Function should return a list of coordinates in x, y format that represent the *numRestaurants number of vegetarian restaurants* nearest the customer.
  -->CONTSTRAINTS: N/A
  -->EDGE CASES: In the event of a tie, we should use the location with the closest x coordinate. If no location is possible, return a list with an empty location. 

2. JUSTIFICATION (restate the question in my own words) - Given a list of vegetarian restaurants' coordinates, and the number of restaurant coordinates our customer would like to receive, build a function that returns the requested amount of restaurants in order from closest to furthest distance from the customer (location 0,0).

3. EXPLANATION (discuss the relationship between inputs and outputs) - Accepting a list of coordinates and a number of restaurants we should return, sort through all locations and order by distance from customer (can be achieved by adding the square roots of each coordinate, or [a*a + b*b]). Once we have a sorted list of all restaurants, slice only the necessary number and return it to the customer. 
*NOT OPTIMAL, BUT FUNCTIONAL FOR A FIRST ITERATION*
  
4. VISUALIZATION - Diagrammed in excalidraw
5. APPROXIMATION (pseudocode) - 
// set sorted array of restaurant coordinates onto to a variable (variable not necessary, but helps for readability)
    // inside sort, use a helper function to calculate distance of each coordinate, and return in ascending order (again, helper function not altogether necessary but more modular, therefore more scalable).  
// return slice of sorted array using numRestaurants

6. VERIFICATION (verify logic line-by-line with test cases) 
7. IMPLEMENTATION (write the dang code!) 

*/ 
