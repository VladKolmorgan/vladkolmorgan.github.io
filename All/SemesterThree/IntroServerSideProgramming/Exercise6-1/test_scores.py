#!/usr/bin/env python3

def display_welcome():
    print("The Test Scores program")
    print("Enter 'x' to exit")
    print("")

def get_scores():
    score_total = 0
    counter = 0
    scores_list = []
    while True:
        score = input("Enter test score: ")
        if score == "x":
            return  scores_list
        else:
            score = int(score)
            if score >= 0 and score <= 100:
                score_total += score
                scores_list.append(score)
                counter += 1 
            else:
                print("Test score must be from 0 through 100. " +
                      "Score discarded. Try again.")

def process_scores(scores_list):
    # calculate total
    score_total = 0
    for score in scores_list:
        score_total += score
    # calculate average score
    score_length = len(scores_list)
    score_average = round(score_total / score_length)
    # calculate low
    score_min = min(scores_list)
    # calculate high
    score_max = max(scores_list)
    #calculate median
    score_mid = score_length//2
    if score_length % 2 == 1:
        score_median = scores_list[score_mid]
    else:
        mid_right = scores_list[score_mid+1]
        mid_left = scores_list[score_mid-1]
        score_median = (mid_left + mid_right)/2
    # format and display the result
    print()
    print("Score total:       ", score_total)
    print("Number of Scores:  ", score_length)
    print("Average Score:     ", score_average)
    print("Low Score:         ", score_min)
    print("High Score:        ", score_max)
    print("Median Score:      ", score_median)

def main():
    display_welcome()
    scores_list = get_scores()
    process_scores(scores_list)
    print("")
    print("Bye!")

# if started as the main module, call the main function
if __name__ == "__main__":
    main()


