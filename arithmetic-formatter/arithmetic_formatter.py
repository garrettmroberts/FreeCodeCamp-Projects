import re


def arithmetic_arranger(problems, option=False):
    arranged_problems = ""
    if len(problems) > 5:
        return "Error: Too many problems."

    line1 = ""
    line2 = ""
    line3 = ""
    line4 = ""
    for problem in problems:
        try:
            operatorMatch = re.search('[+-]', problem)
            operatorIdx = operatorMatch.start()
            operator = problem[operatorIdx]
        except:
            return 'Error: Operator must be \'+\' or \'-\'.'

        firstNum = problem[0:operatorIdx - 1]
        secondNum = problem[operatorIdx + 2:]

        if re.match('^\d+$', firstNum) == None or re.match('^\d+$', secondNum) == None:
            return 'Error: Numbers must only contain digits.'

        if len(firstNum) > 4 or len(secondNum) > 4:
            return 'Error: Numbers cannot be more than four digits.'

        if len(firstNum) > len(secondNum) + 2:
            lineLength = len(firstNum)
        else:
            lineLength = len(secondNum) + 2

        line1 = line1 + (' ' * (lineLength - len(firstNum))) + \
            firstNum + '    '
        line2 = line2 + \
            (operator + (' ' * (lineLength - len(secondNum) - 1)) + secondNum) + '    '
        line3 = line3 + '-' * lineLength + '    '

        if option == True:
            sol = eval(firstNum + operator + secondNum)
            line4 = line4 + (" " * (lineLength - len(str(sol)))
                             ) + str(sol) + '    '

    arranged_problems = line1 + "\n"
    arranged_problems = arranged_problems + line2 + '\n'
    arranged_problems = arranged_problems + line3
    arranged_problems = arranged_problems + '\n' + line4

    return arranged_problems


print(arithmetic_arranger(
    ["32 - 698", "1 - 3801", "45 + 43", "123 + 49"], True))