// lessons.js

// Metadata for the Dashboard to render the module/section list
export const modules = [
  {
    id: 1,
    title: "Variables and Data Types",
    subtitle: "Storing and identifying data",
    sections: [
      { id: 1, title: "Variables and Naming Rules", startId: 1 },
      { id: 2, title: "Numeric Types (int, float)", startId: 31 },
      { id: 3, title: "Text Data (str)", startId: 61 },
      { id: 4, title: "Boolean Values (True, False)", startId: 91 },
      { id: 5, title: "Type Conversion", startId: 121 }
    ]
  }
];

export const lessons = [
  // ==========================================
  // SECTION 1: Variables and Naming Rules (1-30)
  // ==========================================

  // --- Practice (1-15) ---
  {
    id: 1, sectionId: 1, isQuiz: false, title: "The Assignment", era: "BASICS",
    description: "Use = to store a value.", mission: "Create a variable 'bias' and set it to 'Felix'. Print bias.",
    expectedOutput: "Felix", hint: "bias = 'Felix' then print(bias)"
  },
  {
    id: 2, sectionId: 1, isQuiz: false, title: "Valid Names", era: "BASICS",
    description: "Names can't start with numbers.", mission: "Create a variable 'skz_8' and set it to 'OT8'. Print it.",
    expectedOutput: "OT8", hint: "skz_8 = 'OT8'"
  },
  {
    id: 3, sectionId: 1, isQuiz: false, title: "Case Sensitivity", era: "BASICS",
    description: "Group and group are different.", mission: "Set 'Group' to 'Stray Kids' and print Group.",
    expectedOutput: "Stray Kids", hint: "Capitalize the 'G' in Group."
  },
  {
    id: 4, sectionId: 1, isQuiz: false, title: "Snake Case", era: "BASICS",
    description: "Use underscores for spaces.", mission: "Set 'my_bias' to 'Hyunjin' and print it.",
    expectedOutput: "Hyunjin", hint: "my_bias = 'Hyunjin'"
  },
  {
    id: 5, sectionId: 1, isQuiz: false, title: "Reassignment", era: "BASICS",
    description: "Variables can change.", mission: "Set 'song' to 'LALALALA', then change it to 'S-Class'. Print song.",
    expectedOutput: "S-Class", hint: "Assign twice, then print once."
  },
  // ... [Continuing 6-15 with similar naming/assignment practice] ...
  { id: 15, sectionId: 1, isQuiz: false, title: "Naming Recap", era: "BASICS", description: "Final Practice.", mission: "Set 'debut_year' to 2018 and print it.", expectedOutput: "2018", hint: "debut_year = 2018" },

  // --- Section 1 Quiz (16-30) ---
  {
    id: 16, sectionId: 1, isQuiz: true, title: "Quiz: Illegal Start", era: "QUIZ",
    description: "Fix the name.", mission: "The code '1st_member = \"Chan\"' is wrong. Fix it to 'first_member' and print.",
    expectedOutput: "Chan", hint: "Variable names cannot start with numbers."
  },
  {
    id: 17, sectionId: 1, isQuiz: true, title: "Quiz: Keywords", era: "QUIZ",
    description: "Don't use reserved words.", mission: "You can't name a variable 'print'. Use 'shoutout' = 'SKZ' instead and print it.",
    expectedOutput: "SKZ", hint: "shoutout = 'SKZ'"
  },
  // ... [Continuing 18-30 with increasing complexity naming challenges] ...

  // ==========================================
  // SECTION 2: Numeric Types (31-60)
  // ==========================================

  // --- Practice (31-45) ---
  {
    id: 31, sectionId: 2, isQuiz: false, title: "Integers", era: "NUMBERS",
    description: "Whole numbers are ints.", mission: "Set 'members' to 8 and print it.",
    expectedOutput: "8", hint: "members = 8"
  },
  {
    id: 32, sectionId: 2, isQuiz: false, title: "Floats", era: "NUMBERS",
    description: "Decimals are floats.", mission: "Set 'version' to 2.0 and print it.",
    expectedOutput: "2.0", hint: "version = 2.0"
  },
  // ... [46-60 Quiz content focusing on math operations with int/float] ...

  // ==========================================
  // SECTION 3: Text Data (61-90)
  // ==========================================

  // --- Practice (61-75) ---
  {
    id: 61, sectionId: 3, isQuiz: false, title: "Strings", era: "TEXT",
    description: "Use quotes for text.", mission: "Print 'Step Out'.",
    expectedOutput: "Step Out", hint: "print('Step Out')"
  },
  {
    id: 62, sectionId: 3, isQuiz: false, title: "Concatenation", era: "TEXT",
    description: "Combine with +.", mission: "Print 'SKZ' + 'STAY'.",
    expectedOutput: "SKZSTAY", hint: "Use the + sign."
  },
  // ... [76-90 Quiz content focusing on string methods like .upper(), .lower()] ...

  // ==========================================
  // SECTION 4: Booleans (91-120)
  // ==========================================

  // --- Practice (91-105) ---
  {
    id: 91, sectionId: 4, isQuiz: false, title: "True/False", era: "LOGIC",
    description: "Booleans must be capitalized.", mission: "Set 'is_stay' to True and print it.",
    expectedOutput: "True", hint: "True (with a capital T)"
  },
  // ... [106-120 Quiz content focusing on comparison operators returning booleans] ...

  // ==========================================
  // SECTION 5: Type Conversion (121-150)
  // ==========================================

  // --- Practice (121-135) ---
  {
    id: 121, sectionId: 5, isQuiz: false, title: "Int to Str", era: "CONVERSION",
    description: "Convert numbers to text.", mission: "Set age = 20. Print str(age).",
    expectedOutput: "20", hint: "print(str(age))"
  },
  // --- Section 5 Quiz (136-150) ---
  {
    id: 150, sectionId: 5, isQuiz: true, title: "Final Mastery", era: "QUIZ",
    description: "The ultimate test.", mission: "Convert 8.9 to an integer and print it.",
    expectedOutput: "8", hint: "Use int(8.9)"
  }
];