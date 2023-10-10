# 5 Mini Projects
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)



## 1. The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

-   Write a function named  `tellFortune`  that:
    -   takes 4 arguments: number of children, partner's name, geographic location, job title.
    -   outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
-   Call that function 3 times with 3 different values for the arguments.

## 2. The Puppy Age Calculator

You know how old your dog is in human years, but what about dog years? Calculate it!

-   Write a function named  `calculateDogAge`  that:
    -   takes 1 argument: your puppy's age.
    -   calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
    -   outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
-   Call the function three times with different sets of values.
-   **Bonus**: Add the conversion rate of human to dog years as an additional parameter to the function.


## 3. The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

-   Write a function named  `calculateSupply`  that:
    -   takes 2 arguments: age, amount per day.
    -   calculates the amount consumed for rest of the life (based on a constant max age).
    -   outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
-   Call that function three times, passing in different values each time.
-   **Bonus**: Accept floating point values for amount per day, and round the result to a round number.


## 4. The Geometrizer

Create 2 functions that calculate properties of a circle, using the  [definitions](http://math2.org/math/geometry/circles.htm)  here.

Create a function called  `calcCircumfrence`:

-   Pass the radius to the function.
-   Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called  `calcArea`:

-   Pass the radius to the function.
-   Calculate the area based on the radius, and output "The area is NN".


## 5. The Temperature Converter

It's hot out! Let's make a converter based on  [the steps](http://www.mathsisfun.com/temperature-conversion.html)  here.

Create a function called  `celsiusToFahrenheit`:

-   Store a celsius temperature into a variable.
-   Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called  `fahrenheitToCelsius`:

-   Now store a fahrenheit temperature into a variable.
-   Convert it to celsius and output "NN°F is NN°C."

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. The Fortune Teller

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `tellFortune` recieves `Job`, `Location`, `Partner`, `numOfKids` arguments and returns the Users Fortune |

### 2. Calculate Dog Age

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `calculateDogAge` should Calculate dogs age in `human years` |

### 3. Lifetime Supply Calculator

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `calculateSupply` recieves `age`, `amount per day` and returns the number of snacks needed for lifetime |

### 4. Geometrizer

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `calcCircumference` given a `radius` returns the Circumfrence |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `calcArea` given a `radius` returns the Area |

### 5. Temperature Converter

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `celsiusToFahrenheit` given a `celsius` number returns the Fahrenheit |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `fahrenheitToCelsius` given a `Fahrenheit` number returns the Celsius |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Functions-mini-projects)


[//]: # (autograding info end)