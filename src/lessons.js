// lessons.js

export const modules = [
  {
    id: 1,
    title: "Variables & Data Types",
    subtitle: "Storing and identifying data",
    sections: [{ id: 1, title: "Variables and Naming Rules", startId: 1 }]
  },
  {
    id: 2,
    title: "Numeric Types & Math",
    subtitle: "Calculations and Logic",
    sections: [{ id: 2, title: "Numeric Types (int, float)", startId: 31 }]
  },
  {
    id: 3,
    title: "Text Data (Strings)",
    subtitle: "String Manipulation",
    sections: [{ id: 3, title: "Text Data (str)", startId: 61 }]
  },
  {
    id: 4,
    title: "Boolean Logic",
    subtitle: "Decision Making",
    sections: [{ id: 4, title: "Boolean Values (True, False)", startId: 91 }]
  },
  {
    id: 5,
    title: "Type Conversion",
    subtitle: "Changing Data Formats",
    sections: [{ id: 5, title: "Type Conversion", startId: 121 }]
  }
];

export const lessons = [
  // ==========================================
  // SECTION 1: Variables and Naming Rules (1-30)
  // ==========================================
  { id: 1, sectionId: 1, isQuiz: false, title: "The Assignment", era: "BASICS", description: "Use = to store a value.", mission: "Create a variable 'bias' and set it to 'Felix'. Print bias.", expectedOutput: "Felix", hint: "bias = 'Felix' then print(bias)" },
//  { id: 2, sectionId: 1, isQuiz: false, title: "Valid Names", era: "BASICS", description: "Names can't start with numbers.", mission: "Create a variable 'skz_8' and set it to 'OT8'. Print it.", expectedOutput: "OT8", hint: "skz_8 = 'OT8'" },
//  { id: 3, sectionId: 1, isQuiz: false, title: "Case Sensitivity", era: "BASICS", description: "Group and group are different.", mission: "Set 'Group' to 'Stray Kids' and print Group.", expectedOutput: "Stray Kids", hint: "Capitalize the 'G' in Group." },
//  { id: 4, sectionId: 1, isQuiz: false, title: "Snake Case", era: "BASICS", description: "Use underscores for spaces.", mission: "Set 'my_bias' to 'Hyunjin' and print it.", expectedOutput: "Hyunjin", hint: "my_bias = 'Hyunjin'" },
//  { id: 5, sectionId: 1, isQuiz: false, title: "Reassignment", era: "BASICS", description: "Variables can change.", mission: "Set 'song' to 'LALALALA', then change it to 'S-Class'. Print song.", expectedOutput: "S-Class", hint: "Assign twice, then print once." },
//  { id: 6, sectionId: 1, isQuiz: false, title: "Multi-Word Names", era: "BASICS", description: "Practice Snake Case.", mission: "Create 'best_dancer' set to 'Lee Know'. Print it.", expectedOutput: "Lee Know", hint: "best_dancer = 'Lee Know'" },
//  { id: 7, sectionId: 1, isQuiz: false, title: "Number in Middle", era: "BASICS", description: "Numbers are allowed inside names.", mission: "Set 'skz3racha' to 'Unit' and print it.", expectedOutput: "Unit", hint: "skz3racha = 'Unit'" },
//  { id: 8, sectionId: 1, isQuiz: false, title: "Short Names", era: "BASICS", description: "x or y are valid but less clear.", mission: "Set x to 'Han' and print x.", expectedOutput: "Han", hint: "x = 'Han'" },
//  { id: 9, sectionId: 1, isQuiz: false, title: "The Leader", era: "BASICS", description: "Assigning strings.", mission: "Set 'leader' to 'Bang Chan' and print leader.", expectedOutput: "Bang Chan", hint: "leader = 'Bang Chan'" },
//  { id: 10, sectionId: 1, isQuiz: false, title: "Constant-like", era: "BASICS", description: "Caps are often used for fixed values.", mission: "Set 'GENRE' to 'K-Pop' and print it.", expectedOutput: "K-Pop", hint: "GENRE = 'K-Pop'" },
//  { id: 11, sectionId: 1, isQuiz: false, title: "Memory Space", era: "BASICS", description: "Updating values.", mission: "Set 'score' to 10. Then set 'score' to 100. Print score.", expectedOutput: "100", hint: "Always prints the last value." },
//  { id: 12, sectionId: 1, isQuiz: false, title: "String Quotes", era: "BASICS", description: "Double or single quotes work.", mission: "Set 'album' to \"Maxident\" and print it.", expectedOutput: "Maxident", hint: "album = \"Maxident\"" },
//  { id: 13, sectionId: 1, isQuiz: false, title: "Underscore Start", era: "BASICS", description: "_name is valid.", mission: "Set '_hidden' to 'I.N' and print _hidden.", expectedOutput: "I.N", hint: "_hidden = 'I.N'" },
//  { id: 14, sectionId: 1, isQuiz: false, title: "Visual Check", era: "BASICS", description: "Naming check.", mission: "Set 'visual' to 'Seungmin' and print visual.", expectedOutput: "Seungmin", hint: "visual = 'Seungmin'" },
//  { id: 15, sectionId: 1, isQuiz: false, title: "Naming Recap", era: "BASICS", description: "Final Practice.", mission: "Set 'debut_year' to 2018 and print it.", expectedOutput: "2018", hint: "debut_year = 2018" },

  // Quiz Section 1
  { id: 16, sectionId: 1, isQuiz: true, title: "Quiz: Illegal Start", era: "QUIZ", description: "Fix the name.", mission: "Fix '1st_member = \"Chan\"' to 'first_member' and print it.", expectedOutput: "Chan", hint: "No numbers at start." },
//  { id: 17, sectionId: 1, isQuiz: true, title: "Quiz: Keywords", era: "QUIZ", description: "Avoid reserved words.", mission: "Change 'print = \"SKZ\"' to 'shoutout = \"SKZ\"' and print shoutout.", expectedOutput: "SKZ", hint: "shoutout = 'SKZ'" },
//  { id: 18, sectionId: 1, isQuiz: true, title: "Quiz: Space Error", era: "QUIZ", description: "No spaces.", mission: "Fix 'my bias = \"Changbin\"' using an underscore and print it.", expectedOutput: "Changbin", hint: "my_bias = 'Changbin'" },
//  { id: 19, sectionId: 1, isQuiz: true, title: "Quiz: Special Chars", era: "QUIZ", description: "No dashes.", mission: "Fix 'skz-members = 8' using an underscore and print it.", expectedOutput: "8", hint: "skz_members = 8" },
//  { id: 20, sectionId: 1, isQuiz: true, title: "Quiz: Case Logic", era: "QUIZ", description: "Match the case.", mission: "a = 'Stay'. print(A) is broken. Fix it to print a.", expectedOutput: "Stay", hint: "Python is case sensitive." },
//  { id: 21, sectionId: 1, isQuiz: true, title: "Quiz: Reassign Flow", era: "QUIZ", description: "Trace the value.", mission: "v = 1; v = 2; v = 3. Print v.", expectedOutput: "3", hint: "Only the latest value survives." },
//  { id: 22, sectionId: 1, isQuiz: true, title: "Quiz: Valid Check", era: "QUIZ", description: "Find the error.", mission: "Correct '@skz = \"Team\"' to 'skz = \"Team\"' and print it.", expectedOutput: "Team", hint: "No special symbols like @." },
//  { id: 23, sectionId: 1, isQuiz: true, title: "Quiz: Syntax", era: "QUIZ", description: "The = sign.", mission: "Fix 'target : \"Award\"' to 'target = \"Award\"' and print it.", expectedOutput: "Award", hint: "Use = for assignment." },
//  { id: 24, sectionId: 1, isQuiz: true, title: "Quiz: Quotes", era: "QUIZ", description: "Missing quotes.", mission: "Fix 'name = Chan' (which errors) to 'name = \"Chan\"' and print it.", expectedOutput: "Chan", hint: "Strings need quotes." },
//  { id: 25, sectionId: 1, isQuiz: true, title: "Quiz: Double Underscore", era: "QUIZ", description: "Valid or not?", mission: "Set '__secret__' to 'SKZ' and print it.", expectedOutput: "SKZ", hint: "Double underscores are allowed." },
//  { id: 26, sectionId: 1, isQuiz: true, title: "Quiz: Mix Up", era: "QUIZ", description: "Variables vs Strings.", mission: "x = 'Felix'. Print x.", expectedOutput: "Felix", hint: "Don't print('x'), print(x)." },
//  { id: 27, sectionId: 1, isQuiz: true, title: "Quiz: Multi-Update", era: "QUIZ", description: "Sequential changes.", mission: "m = 5; m = m + 3. Print m.", expectedOutput: "8", hint: "m was 5, now add 3." },
//  { id: 28, sectionId: 1, isQuiz: true, title: "Quiz: Swapping", era: "QUIZ", description: "Logical swap.", mission: "a = 1; b = 2; a = b. Print a.", expectedOutput: "2", hint: "a now holds b's value." },
//  { id: 29, sectionId: 1, isQuiz: true, title: "Quiz: Empty String", era: "QUIZ", description: "Nothingness.", mission: "Set 'void' to \"\" and print void.", expectedOutput: "", hint: "void = \"\"" },
//  { id: 30, sectionId: 1, isQuiz: true, title: "Section 1 Master", era: "QUIZ", description: "Consolidation.", mission: "Set 'skz_name' to 'Stray Kids' and print skz_name.", expectedOutput: "Stray Kids", hint: "Final test for Section 1!" },

  // ==========================================
  // SECTION 2: Numeric Types (31-60)
  // ==========================================
  { id: 31, sectionId: 2, isQuiz: false, title: "Integers", era: "NUMBERS", description: "Whole numbers are ints.", mission: "Set 'members' to 8 and print it.", expectedOutput: "8", hint: "members = 8" },
  { id: 32, sectionId: 2, isQuiz: false, title: "Floats", era: "NUMBERS", description: "Decimals are floats.", mission: "Set 'version' to 2.0 and print it.", expectedOutput: "2.0", hint: "version = 2.0" },
  { id: 33, sectionId: 2, isQuiz: false, title: "Addition", era: "NUMBERS", description: "Use + for math.", mission: "Print 5 + 3.", expectedOutput: "8", hint: "print(5 + 3)" },
  { id: 34, sectionId: 2, isQuiz: false, title: "Subtraction", era: "NUMBERS", description: "Use - for math.", mission: "Print 10 - 2.", expectedOutput: "8", hint: "print(10 - 2)" },
  { id: 35, sectionId: 2, isQuiz: false, title: "Multiplication", era: "NUMBERS", description: "Use * for math.", mission: "Print 4 * 2.", expectedOutput: "8", hint: "Use the asterisk *." },
  { id: 36, sectionId: 2, isQuiz: false, title: "Division", era: "NUMBERS", description: "Use / for math.", mission: "Print 16 / 2.", expectedOutput: "8.0", hint: "Division always results in a float." },
  { id: 37, sectionId: 2, isQuiz: false, title: "Exponents", era: "NUMBERS", description: "Use ** for powers.", mission: "Print 2 ** 3.", expectedOutput: "8", hint: "2 to the power of 3." },
  { id: 38, sectionId: 2, isQuiz: false, title: "Modulo", era: "NUMBERS", description: "Use % for remainder.", mission: "Print 17 % 9.", expectedOutput: "8", hint: "What's left over?" },
  { id: 39, sectionId: 2, isQuiz: false, title: "Negative Numbers", era: "NUMBERS", description: "ints can be negative.", mission: "Set 'temp' to -8 and print it.", expectedOutput: "-8", hint: "temp = -8" },
  { id: 40, sectionId: 2, isQuiz: false, title: "Large Integers", era: "NUMBERS", description: "Underscores help readability.", mission: "Set 'fans' to 1_000_000 and print it.", expectedOutput: "1000000", hint: "Python ignores underscores in numbers." },
  { id: 41, sectionId: 2, isQuiz: false, title: "Float Precision", era: "NUMBERS", description: "Floating points.", mission: "Set 'pi' to 3.14 and print it.", expectedOutput: "3.14", hint: "pi = 3.14" },
  { id: 42, sectionId: 2, isQuiz: false, title: "Math Variables", era: "NUMBERS", description: "Math with variables.", mission: "a = 5; b = 3; print(a + b).", expectedOutput: "8", hint: "Use the variable names." },
  { id: 43, sectionId: 2, isQuiz: false, title: "Mixed Types", era: "NUMBERS", description: "Int + Float = Float.", mission: "Print 4 + 4.0.", expectedOutput: "8.0", hint: "Result becomes decimal." },
  { id: 44, sectionId: 2, isQuiz: false, title: "Increment", era: "NUMBERS", description: "Shortcuts.", mission: "x = 7; x += 1; print(x).", expectedOutput: "8", hint: "x += 1 is the same as x = x + 1." },
  { id: 45, sectionId: 2, isQuiz: false, title: "Decrement", era: "NUMBERS", description: "Shortcuts.", mission: "x = 9; x -= 1; print(x).", expectedOutput: "8", hint: "Use -=." },

  // Quiz Section 2
  { id: 46, sectionId: 2, isQuiz: true, title: "Quiz: Division Type", era: "QUIZ", description: "Float or Int?", mission: "Divide 10 by 5 and print the result.", expectedOutput: "2.0", hint: "Division / always gives a float." },
  { id: 47, sectionId: 2, isQuiz: true, title: "Quiz: Floor Division", era: "QUIZ", description: "Use // for whole numbers.", mission: "Print 17 // 2.", expectedOutput: "8", hint: "// removes the decimal part." },
  { id: 48, sectionId: 2, isQuiz: true, title: "Quiz: Math Order", era: "QUIZ", description: "PEMDAS rules.", mission: "Print 2 + 3 * 2.", expectedOutput: "8", hint: "Multiplication happens first!" },
  { id: 49, sectionId: 2, isQuiz: true, title: "Quiz: Parentheses", era: "QUIZ", description: "Change order.", mission: "Print (2 + 2) * 2.", expectedOutput: "8", hint: "Brackets happen first." },
  { id: 50, sectionId: 2, isQuiz: true, title: "Quiz: Power Up", era: "QUIZ", description: "Exponents.", mission: "Print 8 ** 1.", expectedOutput: "8", hint: "Any number to power 1 is itself." },
  { id: 51, sectionId: 2, isQuiz: true, title: "Quiz: Modulo Logic", era: "QUIZ", description: "Even or Odd?", mission: "Print 8 % 2.", expectedOutput: "0", hint: "Is there a remainder?" },
  { id: 52, sectionId: 2, isQuiz: true, title: "Quiz: Big Math", era: "QUIZ", description: "Combination.", mission: "Print (10 - 2) * (5 - 4).", expectedOutput: "8", hint: "8 * 1." },
  { id: 53, sectionId: 2, isQuiz: true, title: "Quiz: Variable Math", era: "QUIZ", description: "Storage.", mission: "x = 10; y = 2; print(x - y).", expectedOutput: "8", hint: "Subtract y from x." },
  { id: 54, sectionId: 2, isQuiz: true, title: "Quiz: Update Variable", era: "QUIZ", description: "Multiplication update.", mission: "s = 4; s *= 2; print(s).", expectedOutput: "8", hint: "s = s * 2." },
  { id: 55, sectionId: 2, isQuiz: true, title: "Quiz: Float Math", era: "QUIZ", description: "Decimal math.", mission: "Print 1.5 + 6.5.", expectedOutput: "8.0", hint: "Keep the .0 in the output." },
  { id: 56, sectionId: 2, isQuiz: true, title: "Quiz: Negative Math", era: "QUIZ", description: "Integers.", mission: "Print -2 + 10.", expectedOutput: "8", hint: "10 minus 2." },
  { id: 57, sectionId: 2, isQuiz: true, title: "Quiz: Zero Division", era: "QUIZ", description: "Impossible!", mission: "You can't divide by zero. Just print 0 for now.", expectedOutput: "0", hint: "Don't try x / 0!" },
  { id: 58, sectionId: 2, isQuiz: true, title: "Quiz: Square Root hint", era: "QUIZ", description: "Power of 0.5.", mission: "Print 64 ** 0.5.", expectedOutput: "8.0", hint: "Power of 0.5 is square root." },
  { id: 59, sectionId: 2, isQuiz: true, title: "Quiz: Int vs Float", era: "QUIZ", description: "Compare types.", mission: "Set a = 8 and b = 8.0. Print a.", expectedOutput: "8", hint: "a is the integer." },
  { id: 60, sectionId: 2, isQuiz: true, title: "Section 2 Master", era: "QUIZ", description: "Total Numbers.", mission: "Print 4 + 4.", expectedOutput: "8", hint: "Easy finish!" },

  // ==========================================
  // SECTION 3: Text Data (61-90)
  // ==========================================
  { id: 61, sectionId: 3, isQuiz: false, title: "Strings", era: "TEXT", description: "Use quotes for text.", mission: "Print 'Step Out'.", expectedOutput: "Stay Out", expectedOutput: "Step Out", hint: "print('Step Out')" },
  { id: 62, sectionId: 3, isQuiz: false, title: "Concatenation", era: "TEXT", description: "Combine with +.", mission: "Print 'SKZ' + 'STAY'.", expectedOutput: "SKZSTAY", hint: "No spaces between them." },
  { id: 63, sectionId: 3, isQuiz: false, title: "String Spaces", era: "TEXT", description: "Manual spacing.", mission: "Print 'SKZ ' + 'STAY'.", expectedOutput: "SKZ STAY", hint: "Include the space inside quotes." },
  { id: 64, sectionId: 3, isQuiz: false, title: "String Multiplication", era: "TEXT", description: "Repeating text.", mission: "Print 'Go' * 3.", expectedOutput: "GoGoGo", hint: "Text * number repeats it." },
  { id: 65, sectionId: 3, isQuiz: false, title: "Upper Case", era: "TEXT", description: "Method .upper().", mission: "name = 'skz'; print(name.upper()).", expectedOutput: "SKZ", hint: "Makes it all caps." },
  { id: 66, sectionId: 3, isQuiz: false, title: "Lower Case", era: "TEXT", description: "Method .lower().", mission: "name = 'SKZ'; print(name.lower()).", expectedOutput: "skz", hint: "Makes it small letters." },
  { id: 67, sectionId: 3, isQuiz: false, title: "Length", era: "TEXT", description: "Count characters with len().", mission: "Print len('Felix').", expectedOutput: "5", hint: "len() counts every letter." },
  { id: 68, sectionId: 3, isQuiz: false, title: "Indexing", era: "TEXT", description: "Get one letter [0].", mission: "name = 'Hyunjin'; print(name[0]).", expectedOutput: "H", hint: "Computers start counting at 0." },
  { id: 69, sectionId: 3, isQuiz: false, title: "Last Letter", era: "TEXT", description: "Use index [-1].", mission: "name = 'Han'; print(name[-1]).", expectedOutput: "n", hint: "[-1] goes to the end." },
  { id: 70, sectionId: 3, isQuiz: false, title: "F-Strings", era: "TEXT", description: "Variables inside strings.", mission: "m = 8; print(f'SKZ has {m} members').", expectedOutput: "SKZ has 8 members", hint: "Use the f before the quotes." },
  { id: 71, sectionId: 3, isQuiz: false, title: "Quotes inside Quotes", era: "TEXT", description: "Mix ' and \".", mission: "print(\"Stay's Room\")", expectedOutput: "Stay's Room", hint: "Use double quotes on outside." },
  { id: 72, sectionId: 3, isQuiz: false, title: "New Line", era: "TEXT", description: "Use \\n.", mission: "print('Line1\\nLine2')", expectedOutput: "Line1\nLine2", hint: "Backslash n creates a new line." },
  { id: 73, sectionId: 3, isQuiz: false, title: "Strip Space", era: "TEXT", description: ".strip() removes edges.", mission: "s = ' SKZ '; print(s.strip())", expectedOutput: "SKZ", hint: "Cleans up extra spaces." },
  { id: 74, sectionId: 3, isQuiz: false, title: "Replacement", era: "TEXT", description: ".replace().", mission: "s = 'Love'; print(s.replace('L', 'D'))", expectedOutput: "Dove", hint: "Replace L with D." },
  { id: 75, sectionId: 3, isQuiz: false, title: "Title Case", era: "TEXT", description: ".title().", mission: "print('stray kids'.title())", expectedOutput: "Stray Kids", hint: "Capitalizes every word." },

  // Quiz Section 3
  { id: 76, sectionId: 3, isQuiz: true, title: "Quiz: String Math?", era: "QUIZ", description: "Wait, strings?", mission: "Print '8' + '8'.", expectedOutput: "88", hint: "Quotes make them text, not numbers." },
  { id: 77, sectionId: 3, isQuiz: true, title: "Quiz: Length Check", era: "QUIZ", description: "Spaces count.", mission: "Print len('I.N ') ", expectedOutput: "4", hint: "The space at the end is a character!" },
  { id: 78, sectionId: 3, isQuiz: true, title: "Quiz: First Char", era: "QUIZ", description: "Index 0.", mission: "name = 'Lee Know'; print(name[0])", expectedOutput: "L", hint: "Always 0 for first." },
  { id: 79, sectionId: 3, isQuiz: true, title: "Quiz: Slicing Start", era: "QUIZ", description: "[:3] takes first 3.", mission: "s = 'StrayKids'; print(s[:5])", expectedOutput: "Stray", hint: "0 to 5." },
  { id: 80, sectionId: 3, isQuiz: true, title: "Quiz: Multi-Concat", era: "QUIZ", description: "Complex join.", mission: "print('S' + 'K' + 'Z')", expectedOutput: "SKZ", hint: "Just add them all." },
  { id: 81, sectionId: 3, isQuiz: true, title: "Quiz: Repeater", era: "QUIZ", description: "Math + Text.", mission: "print('HA' * 2)", expectedOutput: "HAHA", hint: "Multiply the string." },
  { id: 82, sectionId: 3, isQuiz: true, title: "Quiz: Broken F-String", era: "QUIZ", description: "Fix the syntax.", mission: "x = 5; print(f'Value is {x}')", expectedOutput: "Value is 5", hint: "Make sure brackets {} are around x." },
  { id: 83, sectionId: 3, isQuiz: true, title: "Quiz: Lowering", era: "QUIZ", description: "Method practice.", mission: "print('STAY'.lower())", expectedOutput: "stay", hint: "Small letters." },
  { id: 84, sectionId: 3, isQuiz: true, title: "Quiz: Find letter", era: "QUIZ", description: "Indexing.", mission: "s = '3RACHA'; print(s[1])", expectedOutput: "R", hint: "0=3, 1=R." },
  { id: 85, sectionId: 3, isQuiz: true, title: "Quiz: Replace All", era: "QUIZ", description: "Substitution.", mission: "s = 'banana'; print(s.replace('a', 'o'))", expectedOutput: "bonono", hint: "Replaces every 'a'." },
  { id: 86, sectionId: 3, isQuiz: true, title: "Quiz: Escaping", era: "QUIZ", description: "Quotes.", mission: "print(\"It's SKZ\")", expectedOutput: "It's SKZ", hint: "Use double quotes on outside." },
  { id: 87, sectionId: 3, isQuiz: true, title: "Quiz: Count letters", era: "QUIZ", description: "len check.", mission: "print(len('12345678'))", expectedOutput: "8", hint: "Count the digits." },
  { id: 88, sectionId: 3, isQuiz: true, title: "Quiz: Case Mix", era: "QUIZ", description: "Methods.", mission: "print('skz'.upper().lower())", expectedOutput: "skz", hint: "Upper then Lower brings it back." },
  { id: 89, sectionId: 3, isQuiz: true, title: "Quiz: Just quotes", era: "QUIZ", description: "Definition.", mission: "x = '8'; print(x)", expectedOutput: "8", hint: "Text 8." },
  { id: 90, sectionId: 3, isQuiz: true, title: "Section 3 Master", era: "QUIZ", description: "Total Text.", mission: "print('SKZ-CODE')", expectedOutput: "SKZ-CODE", hint: "Final section test!" },

  // ==========================================
  // SECTION 4: Booleans (91-120)
  // ==========================================
  { id: 91, sectionId: 4, isQuiz: false, title: "True/False", era: "LOGIC", description: "Booleans must be capitalized.", mission: "Set 'is_stay' to True and print it.", expectedOutput: "True", hint: "True (with a capital T)" },
  { id: 92, sectionId: 4, isQuiz: false, title: "Falsehood", era: "LOGIC", description: "The other side.", mission: "Set 'is_hater' to False and print it.", expectedOutput: "False", hint: "False (capital F)" },
  { id: 93, sectionId: 4, isQuiz: false, title: "Comparison: Equal", era: "LOGIC", description: "Use == to compare.", mission: "Print 8 == 8.", expectedOutput: "True", hint: "Double == checks if values match." },
  { id: 94, sectionId: 4, isQuiz: false, title: "Comparison: Not Equal", era: "LOGIC", description: "Use != for not equal.", mission: "Print 8 != 7.", expectedOutput: "True", hint: "Is 8 different from 7?" },
  { id: 95, sectionId: 4, isQuiz: false, title: "Greater Than", era: "LOGIC", description: "> operator.", mission: "Print 10 > 5.", expectedOutput: "True", hint: "Is 10 bigger?" },
  { id: 96, sectionId: 4, isQuiz: false, title: "Less Than", era: "LOGIC", description: "< operator.", mission: "Print 3 < 1.", expectedOutput: "False", hint: "Is 3 smaller than 1?" },
  { id: 97, sectionId: 4, isQuiz: false, title: "Greater or Equal", era: "LOGIC", description: ">= operator.", mission: "Print 8 >= 8.", expectedOutput: "True", hint: "It is equal, so True." },
  { id: 98, sectionId: 4, isQuiz: false, title: "Less or Equal", era: "LOGIC", description: "<= operator.", mission: "Print 5 <= 10.", expectedOutput: "True", hint: "5 is definitely smaller." },
  { id: 99, sectionId: 4, isQuiz: false, title: "Logical AND", era: "LOGIC", description: "Both must be true.", mission: "Print True and True.", expectedOutput: "True", hint: "and requires both sides to be True." },
  { id: 100, sectionId: 4, isQuiz: false, title: "Logical OR", era: "LOGIC", description: "One must be true.", mission: "Print True or False.", expectedOutput: "True", hint: "or only needs one True." },
  { id: 101, sectionId: 4, isQuiz: false, title: "Logical NOT", era: "LOGIC", description: "Invert it.", mission: "Print not True.", expectedOutput: "False", hint: "not makes it the opposite." },
  { id: 102, sectionId: 4, isQuiz: false, title: "Bool from Math", era: "LOGIC", description: "Comparisons.", mission: "x = 5; print(x == 5).", expectedOutput: "True", hint: "x is 5." },
  { id: 103, sectionId: 4, isQuiz: false, title: "String Equality", era: "LOGIC", description: "Comparing text.", mission: "print('SKZ' == 'skz')", expectedOutput: "False", hint: "Case matters!" },
  { id: 104, sectionId: 4, isQuiz: false, title: "Type Check", era: "LOGIC", description: "Check if bool.", mission: "print(type(True))", expectedOutput: "<class 'bool'>", hint: "Booleans are 'bool' class." },
  { id: 105, sectionId: 4, isQuiz: false, title: "Empty bools", era: "LOGIC", description: "Truthiness.", mission: "print(bool(\"\"))", expectedOutput: "False", hint: "Empty strings are 'Falsy'." },

  // Quiz Section 4
  { id: 106, sectionId: 4, isQuiz: true, title: "Quiz: Double Negative", era: "QUIZ", description: "Logic flip.", mission: "Print not False.", expectedOutput: "True", hint: "Opposite of False." },
  { id: 107, sectionId: 4, isQuiz: true, title: "Quiz: Math Logic", era: "QUIZ", description: "Comparison.", mission: "Print 10 + 2 == 12.", expectedOutput: "True", hint: "Does 12 equal 12?" },
  { id: 108, sectionId: 4, isQuiz: true, title: "Quiz: String check", era: "QUIZ", description: "Equality.", mission: "Print 'A' != 'B'.", expectedOutput: "True", hint: "They are different." },
  { id: 109, sectionId: 4, isQuiz: true, title: "Quiz: And Logic", era: "QUIZ", description: "Double check.", mission: "Print (5 > 2) and (1 > 0).", expectedOutput: "True", hint: "Both sides are True." },
  { id: 110, sectionId: 4, isQuiz: true, title: "Quiz: Or Logic", era: "QUIZ", description: "One is enough.", mission: "Print (5 < 2) or (1 > 0).", expectedOutput: "True", hint: "Second side is True." },
  { id: 111, sectionId: 4, isQuiz: true, title: "Quiz: Not logic", era: "QUIZ", description: "Inversion.", mission: "Print not (10 == 10).", expectedOutput: "False", hint: "10==10 is True, then flipped." },
  { id: 112, sectionId: 4, isQuiz: true, title: "Quiz: Multi-comp", era: "QUIZ", description: "Chaining.", mission: "Print 1 < 2 < 3.", expectedOutput: "True", hint: "Is 1 < 2 AND 2 < 3?" },
  { id: 113, sectionId: 4, isQuiz: true, title: "Quiz: Result storage", era: "QUIZ", description: "Variables.", mission: "res = 10 > 20; print(res).", expectedOutput: "False", hint: "res stores the result of 10 > 20." },
  { id: 114, sectionId: 4, isQuiz: true, title: "Quiz: Type mismatch", era: "QUIZ", description: "Int vs Str.", mission: "Print 8 == '8'.", expectedOutput: "False", hint: "Number 8 is not the text '8'." },
  { id: 115, sectionId: 4, isQuiz: true, title: "Quiz: False caps", era: "QUIZ", description: "Syntax.", mission: "Fix 'x = false' to 'x = False' and print it.", expectedOutput: "False", hint: "Capital F." },
  { id: 116, sectionId: 4, isQuiz: true, title: "Quiz: Identity", era: "QUIZ", description: "is keyword.", mission: "Print True is True.", expectedOutput: "True", hint: "They are exactly the same." },
  { id: 117, sectionId: 4, isQuiz: true, title: "Quiz: Logic order", era: "QUIZ", description: "Precedence.", mission: "Print True or False and False.", expectedOutput: "True", hint: "and happens before or." },
  { id: 118, sectionId: 4, isQuiz: true, title: "Quiz: Not Equals", era: "QUIZ", description: "Symbol.", mission: "Print 5 != 5.", expectedOutput: "False", hint: "Is 5 different from 5? No." },
  { id: 119, sectionId: 4, isQuiz: true, title: "Quiz: Float equality", era: "QUIZ", description: "Values.", mission: "Print 8.0 == 8.", expectedOutput: "True", hint: "Python sees these as equal value." },
  { id: 120, sectionId: 4, isQuiz: true, title: "Section 4 Master", era: "QUIZ", description: "Final Logic.", mission: "Print 10 >= 10.", expectedOutput: "True", hint: "Equal counts!" },

  // ==========================================
  // SECTION 5: Type Conversion (121-150)
  // ==========================================
  { id: 121, sectionId: 5, isQuiz: false, title: "Int to Str", era: "CONVERSION", description: "Convert numbers to text.", mission: "Set age = 20. Print str(age).", expectedOutput: "20", hint: "print(str(age))" },
  { id: 122, sectionId: 5, isQuiz: false, title: "Str to Int", era: "CONVERSION", description: "Text to number.", mission: "Set s = '8'; print(int(s)).", expectedOutput: "8", hint: "int() converts strings to numbers." },
  { id: 123, sectionId: 5, isQuiz: false, title: "Int to Float", era: "CONVERSION", description: "Add a decimal.", mission: "print(float(8)).", expectedOutput: "8.0", hint: "Adds .0." },
  { id: 124, sectionId: 5, isQuiz: false, title: "Float to Int", era: "CONVERSION", description: "Drop the decimal.", mission: "print(int(8.9)).", expectedOutput: "8", hint: "int() truncates (it doesn't round)." },
  { id: 125, sectionId: 5, isQuiz: false, title: "Str to Float", era: "CONVERSION", description: "Text to decimal.", mission: "print(float('3.14')).", expectedOutput: "3.14", hint: "float() reads the string." },
  { id: 126, sectionId: 5, isQuiz: false, title: "Bool to Int", era: "CONVERSION", description: "Logic to number.", mission: "print(int(True)).", expectedOutput: "1", hint: "True is 1, False is 0." },
  { id: 127, sectionId: 5, isQuiz: false, title: "Bool to Str", era: "CONVERSION", description: "Logic to text.", mission: "print(str(False)).", expectedOutput: "False", hint: "Now it is text 'False'." },
  { id: 128, sectionId: 5, isQuiz: false, title: "Int to Bool", era: "CONVERSION", description: "Non-zero check.", mission: "print(bool(1)).", expectedOutput: "True", hint: "Any number except 0 is True." },
  { id: 129, sectionId: 5, isQuiz: false, title: "Zero to Bool", era: "CONVERSION", description: "Zero check.", mission: "print(bool(0)).", expectedOutput: "False", hint: "0 is always False." },
  { id: 130, sectionId: 5, isQuiz: false, title: "The type() function", era: "CONVERSION", description: "Check type.", mission: "print(type(str(8))).", expectedOutput: "<class 'str'>", hint: "It was an int, now it's a str." },
  { id: 131, sectionId: 5, isQuiz: false, title: "Concat fix", era: "CONVERSION", description: "String + Number error.", mission: "print('SKZ' + str(8)).", expectedOutput: "SKZ8", hint: "You must convert 8 to a string first." },
  { id: 132, sectionId: 5, isQuiz: false, title: "Input Simulation", era: "CONVERSION", description: "Fake input.", mission: "val = '100'; print(int(val) + 50).", expectedOutput: "150", hint: "Convert to int to do math." },
  { id: 133, sectionId: 5, isQuiz: false, title: "Rounded Int", era: "CONVERSION", description: "The round() function.", mission: "print(round(8.6)).", expectedOutput: "9", hint: "round() actually rounds properly." },
  { id: 134, sectionId: 5, isQuiz: false, title: "Complex Type", era: "CONVERSION", description: "Nested functions.", mission: "print(float(int(8.5))).", expectedOutput: "8.0", hint: "int(8.5) is 8, then float(8) is 8.0." },
  { id: 135, sectionId: 5, isQuiz: false, title: "Final Type Prep", era: "CONVERSION", description: "Basics check.", mission: "print(str(True)).", expectedOutput: "True", hint: "Convert bool to text." },

  // Quiz Section 5
  { id: 136, sectionId: 5, isQuiz: true, title: "Quiz: Mixed Concat", era: "QUIZ", description: "Fix the error.", mission: "Fix: print('Members: ' + 8) by converting 8.", expectedOutput: "Members: 8", hint: "Use str(8)." },
  { id: 137, sectionId: 5, isQuiz: true, title: "Quiz: Truncation", era: "QUIZ", description: "Removing decimals.", mission: "Convert 10.99 to an int and print it.", expectedOutput: "10", hint: "int() always chops off the end." },
  { id: 138, sectionId: 5, isQuiz: true, title: "Quiz: Float to Bool", era: "QUIZ", description: "Truthiness.", mission: "Print bool(0.0).", expectedOutput: "False", hint: "0.0 is also Falsy." },
  { id: 139, sectionId: 5, isQuiz: true, title: "Quiz: Int conversion", era: "QUIZ", description: "Math strings.", mission: "print(int('5') + int('3'))", expectedOutput: "8", hint: "Convert both then add." },
  { id: 140, sectionId: 5, isQuiz: true, title: "Quiz: String check", era: "QUIZ", description: "Type test.", mission: "print(type('True'))", expectedOutput: "<class 'str'>", hint: "Quotes make it a string, not a bool!" },
  { id: 141, sectionId: 5, isQuiz: true, title: "Quiz: Decimal logic", era: "QUIZ", description: "Floating.", mission: "print(float('8') + 0.5)", expectedOutput: "8.5", hint: "Convert to float first." },
  { id: 142, sectionId: 5, isQuiz: true, title: "Quiz: Bool to math", era: "QUIZ", description: "Binary logic.", mission: "print(int(True) + int(True))", expectedOutput: "2", hint: "1 + 1." },
  { id: 143, sectionId: 5, isQuiz: true, title: "Quiz: Str conversion", era: "QUIZ", description: "Value check.", mission: "print(str(10 * 2))", expectedOutput: "20", hint: "Math happens first, then string." },
  { id: 144, sectionId: 5, isQuiz: true, title: "Quiz: Round down", era: "QUIZ", description: "Rounding.", mission: "print(round(7.4))", expectedOutput: "7", hint: ".4 rounds down." },
  { id: 145, sectionId: 5, isQuiz: true, title: "Quiz: Type nest", era: "QUIZ", description: "Multi-wrap.", mission: "print(type(int(float('8.0'))))", expectedOutput: "<class 'int'>", hint: "Final wrapper is int." },
  { id: 146, sectionId: 5, isQuiz: true, title: "Quiz: Truthy string", era: "QUIZ", description: "Non-empty.", mission: "print(bool('False'))", expectedOutput: "True", hint: "Even the word 'False' is a non-empty string, so it's True!" },
  { id: 147, sectionId: 5, isQuiz: true, title: "Quiz: Int input", era: "QUIZ", description: "Math.", mission: "x = '4'; print(int(x) * 2)", expectedOutput: "8", hint: "Convert x to int." },
  { id: 148, sectionId: 5, isQuiz: true, title: "Quiz: Float format", era: "QUIZ", description: "Decimals.", mission: "print(float(10 - 2))", expectedOutput: "8.0", hint: "Convert 8 to float." },
  { id: 149, sectionId: 5, isQuiz: true, title: "Quiz: Type name", era: "QUIZ", description: "Identification.", mission: "print(type(8.0))", expectedOutput: "<class 'float'>", hint: "Decimals are floats." },
  { id: 150, sectionId: 5, isQuiz: true, title: "Final Mastery", era: "QUIZ", description: "The ultimate test.", mission: "Convert 8.9 to an integer and print it.", expectedOutput: "8", hint: "Use int(8.9)" }
];