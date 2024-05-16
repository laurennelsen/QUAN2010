var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-Intro",
  "level": "1",
  "url": "sec-Intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "2.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-TypesOfData",
  "level": "1",
  "url": "sec-TypesOfData.html",
  "type": "Section",
  "number": "2.2",
  "title": "Types of Data",
  "body": " Types of Data  Text of section.  "
},
{
  "id": "sec-Random-Variables",
  "level": "1",
  "url": "sec-Random-Variables.html",
  "type": "Section",
  "number": "3.1",
  "title": "Random Variables",
  "body": " Random Variables  Say some stuff about random variables in general....    Two Types of Random Variables:  discrete random variable: outcomes are whole numbers after performing an experiment  continuous random variable: outcomes are any numerical value (including decimals or fractions) after performing an experiment      ...insert examples of these types of random variables..... ....Random variables can be distributed differently....    A discrete probability distribution is a listing of all possible outcomes of an experiment for a discrete random variable along with the relative frequency of each outcome   Each outcome in the distribution must be mutually exclusive     for all ; i.e., the probability of each outcome is between 0 and 1     ; the sum of all probabilities is 1       "
},
{
  "id": "def-RandomVariables",
  "level": "2",
  "url": "sec-Random-Variables.html#def-RandomVariables",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  Two Types of Random Variables:  discrete random variable: outcomes are whole numbers after performing an experiment  continuous random variable: outcomes are any numerical value (including decimals or fractions) after performing an experiment     "
},
{
  "id": "def-discrete-probability-distribution",
  "level": "2",
  "url": "sec-Random-Variables.html#def-discrete-probability-distribution",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  A discrete probability distribution is a listing of all possible outcomes of an experiment for a discrete random variable along with the relative frequency of each outcome   Each outcome in the distribution must be mutually exclusive     for all ; i.e., the probability of each outcome is between 0 and 1     ; the sum of all probabilities is 1      "
},
{
  "id": "sec-Desc-Stats-Discrete",
  "level": "1",
  "url": "sec-Desc-Stats-Discrete.html",
  "type": "Section",
  "number": "3.2",
  "title": "Descriptive Statistics for a Discrete Probability Distribution",
  "body": " Descriptive Statistics for a Discrete Probability Distribution  ....insert stuff about things we might want to ask about a distribution.... what average value would we expect rolling a die or playing a gambling game? how spread out are the values...?      The mean, or expected value of a discrete probability distribution is the weighted average of all outcomes of the random variable.     The expected monetary value is the mean when the discrete random variable is in dollars ($)    The variance of a discrete probability distribution measures the spread of the individual values around the mean.     The standard deviation of a discrete probability distribution measures the dispersion of the outcome of the random variable in relation to the mean.        (Donnely 5.7) The table below shows the discrete probability distribution for the number of bedrooms per house in a certain community:    of Bedrooms  Probability    3  0.23    4  0.57    5  0.14    6  ???      Determine the missing probability for a 6-bedroom house.  Determine the mean number of bedrooms per house.  Determine the standard deviation for the number of bedrooms per house. (Hint: Use the table below to compute the variance first....fix this or add something in Excel.....)                                                  It turns out we can calculate this in Excel! ...insert Excel commands....   (Donnelly 5.45)  Tees R Us manufactures and sells T-shirts for sporting events, is providing shirts for an upcoming tournament. Each shirt will cost to produce and will be sold for . Any unsold shirts at the end of the tournament can be sold for a piece in the near future. Tees R Us assumes the demand for the shirts will be , , , or . They also estimate that the probabilities of each of these sales levels occurring will be , , , and , respectively. Determine the expected monetary value of the project if Tees R Us chooses to print shirts for the tournament.   "
},
{
  "id": "sec-Desc-Stats-Discrete-3",
  "level": "2",
  "url": "sec-Desc-Stats-Discrete.html#sec-Desc-Stats-Discrete-3",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "    The mean, or expected value of a discrete probability distribution is the weighted average of all outcomes of the random variable.     The expected monetary value is the mean when the discrete random variable is in dollars ($)    The variance of a discrete probability distribution measures the spread of the individual values around the mean.     The standard deviation of a discrete probability distribution measures the dispersion of the outcome of the random variable in relation to the mean.      "
},
{
  "id": "sec-Desc-Stats-Discrete-4",
  "level": "2",
  "url": "sec-Desc-Stats-Discrete.html#sec-Desc-Stats-Discrete-4",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": " (Donnely 5.7) The table below shows the discrete probability distribution for the number of bedrooms per house in a certain community:    of Bedrooms  Probability    3  0.23    4  0.57    5  0.14    6  ???      Determine the missing probability for a 6-bedroom house.  Determine the mean number of bedrooms per house.  Determine the standard deviation for the number of bedrooms per house. (Hint: Use the table below to compute the variance first....fix this or add something in Excel.....)                                                 "
},
{
  "id": "sec-Desc-Stats-Discrete-6",
  "level": "2",
  "url": "sec-Desc-Stats-Discrete.html#sec-Desc-Stats-Discrete-6",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": " (Donnelly 5.45)  Tees R Us manufactures and sells T-shirts for sporting events, is providing shirts for an upcoming tournament. Each shirt will cost to produce and will be sold for . Any unsold shirts at the end of the tournament can be sold for a piece in the near future. Tees R Us assumes the demand for the shirts will be , , , or . They also estimate that the probabilities of each of these sales levels occurring will be , , , and , respectively. Determine the expected monetary value of the project if Tees R Us chooses to print shirts for the tournament.  "
},
{
  "id": "sec-Binomial-Distribution",
  "level": "1",
  "url": "sec-Binomial-Distribution.html",
  "type": "Section",
  "number": "3.3",
  "title": "Binomial Distribution",
  "body": " Binomial Distribution    A binomial experiment is a probability experiment possessing the following characteristics:   It has a fixed number of trials, .    Each trial has only two possible outcomes: success or failure.    The probability of success, , and the probability of failure, , are constant.    Each trial is independent of the other trials.     The outcomes of a binomial experiment and the corresponding probabilities of these outcomes are called a binomial distribution .  The probability of exactly successes in trials with probability of success, , is     Binomial Multiple Choice Problem  Which of the following are binomial experiments?     Taking a sample of 50 employees and counting how many of them are women.    answer specific feedback      Taking a standardized test 3 times and counting how many times I got a passing score.    answer specific feedback      Flipping a coin 100 times and counting how many times I got tails .    answer specific feedback      Taking a group of 100 students and finding their average GPA.    answer specific feedback      Tracking how long it took me to drive to work each day over a month.    (The time to drive to work is not a discrete variable.)     "
},
{
  "id": "def-Binomial",
  "level": "2",
  "url": "sec-Binomial-Distribution.html#def-Binomial",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  A binomial experiment is a probability experiment possessing the following characteristics:   It has a fixed number of trials, .    Each trial has only two possible outcomes: success or failure.    The probability of success, , and the probability of failure, , are constant.    Each trial is independent of the other trials.     The outcomes of a binomial experiment and the corresponding probabilities of these outcomes are called a binomial distribution .  The probability of exactly successes in trials with probability of success, , is    "
},
{
  "id": "binomial-multiple-choice",
  "level": "2",
  "url": "sec-Binomial-Distribution.html#binomial-multiple-choice",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "Binomial Multiple Choice Problem.",
  "body": "Binomial Multiple Choice Problem  Which of the following are binomial experiments?     Taking a sample of 50 employees and counting how many of them are women.    answer specific feedback      Taking a standardized test 3 times and counting how many times I got a passing score.    answer specific feedback      Flipping a coin 100 times and counting how many times I got tails .    answer specific feedback      Taking a group of 100 students and finding their average GPA.    answer specific feedback      Tracking how long it took me to drive to work each day over a month.    (The time to drive to work is not a discrete variable.)    "
},
{
  "id": "sec-correlation",
  "level": "1",
  "url": "sec-correlation.html",
  "type": "Section",
  "number": "4.1",
  "title": "Correlation Analysis",
  "body": " Correlation Analysis  Text of section.       An independent variable explains the variation in the dependent variable    A dependent variable is explained by one or more independent variables        Correlation analysis provides a way to measure the strength and direction of the linear relationship between the two variables (the aforementioned independent and dependent variables). This is done by computing the sample correlation coefficient , .  The range of the correlation coefficient is .   A positive value indicates that as increases, also increases.    A negative value indicates that as increases, decreases.     Recall that we used the Excel formula, CORREL, to calculate this number in a previous chapter. Now we improve on that skill by learning how to use a hypothesis test to assess the strength of the linear relationship described by .  The population correlation coefficient, , refers to the correlation between all values of two variables in a population. A value of means that there is no linear relationship between and . We don't know the value of so we use the sample correlation coefficient to test whether we have enough evidence from the sample to conclude that there is a linear relationship between the variables in the population. The two hypotheses for this hypothesis test are:     The test statistic uses the Student's -distribution with formula:       text   "
},
{
  "id": "sec-correlation-3",
  "level": "2",
  "url": "sec-correlation.html#sec-correlation-3",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "     An independent variable explains the variation in the dependent variable    A dependent variable is explained by one or more independent variables      "
},
{
  "id": "correlation",
  "level": "2",
  "url": "sec-correlation.html#correlation",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": " text  "
},
{
  "id": "sec-Diamonds",
  "level": "1",
  "url": "sec-Diamonds.html",
  "type": "Section",
  "number": "4.2",
  "title": "Diamonds Modeling",
  "body": " Diamonds Modeling  (Background on diamonds was provided in part by research done at https:\/\/www.brilliance.com\/education\/diamonds\/depth-table)  When a gemologist determines the value of a diamond, he or she considers a number of different factors. These factors are known as the 4C's (carat, color, clarity, and cut). How large is the diamond? The size (really the weight) of the diamond is measured in carats. Is it colorless or does it have a slight hue of color? Are there any visible inclusions in the diamond (this affects the clarity)?  Was the stone cut well? This is described by both the table and the depth. They both helps to define the physical shape of a diamond and contribute to its sparkle. When these two features are proportioned just right, a diamond of any size looks spectacular.  Every diamond has a flat, square-shaped facet on its top called the table. It plays a critical role in a diamond’s appearance. The table refracts rays of light as they pass, directing them to the facets that make the diamond look so sparkly. The physical size of the table facet naturally varies depending on the overall size of the diamond. Jewelers measure the table percentage when grading a diamond’s cut. Table percentage is calculated by dividing the width of the table by the overall width of the diamond. The ideal table percentage will vary based on the shape of the diamond.  The depth of a diamond might also be called the “height”: it is the distance from the table to the culet (the pointed tip) of the diamond. Like with a diamond’s table, jewelers grade a diamond’s depth based on its depth percentage. Depth percentage is the diamond’s depth divided by the width of the diamond. This percentage dictates the overall proportions of the diamond, which in turn directly impact how light reflects off the facets in the stone.   Here is the file we are going to use for this problem:   The price of diamonds is not just determined by size, but by multiple characteristics. For simplicity, in this example we will start with size. Create the scatterplot for the two variables Price and Carat .     Determine the least squares line. Interpret the slope coefficient.    According to your least squares line, what would you expect the price to be for a 5 carat diamond?    Compute the coefficient of correlation. What does it tell you about the relationship between the size of a diamond and the price?       We're going to use the same file we used in the previous problem:   Now we will take into consideration the other characteristics of diamonds that determine price: carat, color, clarity, and cut. Let's redo the regression and create a model that does a better job than the one in the previous example that only included a single predictor variable.     Create the regression model with all 5 variables that are provided: color, depth (in percentage), clarity, table (in percentage), and carat.    Interpret each of the coefficients in the model.    Do all 5 of the predictor variables belong in the model? Why or why not?    Is the overall model valid? Why or why not?    What is the coefficient of determination? What does it tell you about the model?    Remove variables one by one and reassess the model. What is the best model to predict the price of a diamond? Why?      "
},
{
  "id": "sec-Diamonds-7",
  "level": "2",
  "url": "sec-Diamonds.html#sec-Diamonds-7",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "",
  "body": " Here is the file we are going to use for this problem:   The price of diamonds is not just determined by size, but by multiple characteristics. For simplicity, in this example we will start with size. Create the scatterplot for the two variables Price and Carat .     Determine the least squares line. Interpret the slope coefficient.    According to your least squares line, what would you expect the price to be for a 5 carat diamond?    Compute the coefficient of correlation. What does it tell you about the relationship between the size of a diamond and the price?     "
},
{
  "id": "sec-Diamonds-8",
  "level": "2",
  "url": "sec-Diamonds.html#sec-Diamonds-8",
  "type": "Exercise",
  "number": "4.2.2",
  "title": "",
  "body": " We're going to use the same file we used in the previous problem:   Now we will take into consideration the other characteristics of diamonds that determine price: carat, color, clarity, and cut. Let's redo the regression and create a model that does a better job than the one in the previous example that only included a single predictor variable.     Create the regression model with all 5 variables that are provided: color, depth (in percentage), clarity, table (in percentage), and carat.    Interpret each of the coefficients in the model.    Do all 5 of the predictor variables belong in the model? Why or why not?    Is the overall model valid? Why or why not?    What is the coefficient of determination? What does it tell you about the model?    Remove variables one by one and reassess the model. What is the best model to predict the price of a diamond? Why?     "
},
{
  "id": "sec-normal-distribution",
  "level": "1",
  "url": "sec-normal-distribution.html",
  "type": "Section",
  "number": "5.1",
  "title": "The Normal Distribution",
  "body": " The Normal Distribution  Text of section.  Normal Distribution Matching Problem  Problem instructions.     A random variable follows the normal probability distribution with a mean of 135 and a standard deviation of 22. What is the probability that a randomly selected value is between 120 and 180?    NORM.S.DIST(2.05,1)-NORM.S.DIST(- 0.68,1)      A random variable follows the normal probability distribution with a mean of 135 and a standard deviation of 22. What is the probability that a randomly selected value is more than 40?    1-NORM.DIST(40,135,22,1)      A random variable follows the normal probability distribution with a mean of 135 and a standard deviation of 22. What is the probability that a randomly selected value is less than 90?    NORM.DIST(90,135,22,TRUE)      Find the probability for a standard normal distribution:     NORM.S.DIST(2.35,TRUE)     Normal Distribution Matching Problem  Problem instructions.     Find the probability for a standard normal distribution:     1-NORM.S.DIST(2.35,1)      Find the probability for a standard normal distribution:     NORM.S.DIST(1.76,TRUE)- NORM.S.DIST(-0.86,TRUE),1)      Find the probability for a standard normal distribution:     NORM.S.DIST(1.5,TRUE)      Find the probability for a standard normal distribution:     1-NORM.S.DIST(1.5,TRUE)     "
},
{
  "id": "matching",
  "level": "2",
  "url": "sec-normal-distribution.html#matching",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "Normal Distribution Matching Problem.",
  "body": "Normal Distribution Matching Problem  Problem instructions.     A random variable follows the normal probability distribution with a mean of 135 and a standard deviation of 22. What is the probability that a randomly selected value is between 120 and 180?    NORM.S.DIST(2.05,1)-NORM.S.DIST(- 0.68,1)      A random variable follows the normal probability distribution with a mean of 135 and a standard deviation of 22. What is the probability that a randomly selected value is more than 40?    1-NORM.DIST(40,135,22,1)      A random variable follows the normal probability distribution with a mean of 135 and a standard deviation of 22. What is the probability that a randomly selected value is less than 90?    NORM.DIST(90,135,22,TRUE)      Find the probability for a standard normal distribution:     NORM.S.DIST(2.35,TRUE)    "
},
{
  "id": "matching",
  "level": "2",
  "url": "sec-normal-distribution.html#matching",
  "type": "Exercise",
  "number": "5.1.2",
  "title": "Normal Distribution Matching Problem.",
  "body": "Normal Distribution Matching Problem  Problem instructions.     Find the probability for a standard normal distribution:     1-NORM.S.DIST(2.35,1)      Find the probability for a standard normal distribution:     NORM.S.DIST(1.76,TRUE)- NORM.S.DIST(-0.86,TRUE),1)      Find the probability for a standard normal distribution:     NORM.S.DIST(1.5,TRUE)      Find the probability for a standard normal distribution:     1-NORM.S.DIST(1.5,TRUE)    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
