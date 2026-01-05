import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Lightbulb, Zap, ArrowRight, Layers, Box, Repeat, List, Code2, Terminal } from 'lucide-react';

const ModuleIntro = ({ moduleId, onBegin }) => {
  const introData = {
    1: {
      title: "Variables & Data Types",
      icon: <Box size={20} />,
      concept: "Think of Variables as 'labeled boxes'. In Python, you don't just throw data onto the floor; you store it in a box with a name so you can find it later.",
      variableExamples: [
        { label: "Box Name (Variable)", value: "fav_song", desc: "The name you use to call the data. No spaces allowed!" },
        { label: "The Content (Value)", value: "'S-Class'", desc: "The actual data sitting inside the box." },
        { label: "The Assignment (=)", value: "=", desc: "Putting the data into the box." }
      ],
      dataTypesInfo: [
        { type: "Strings (str)", desc: "Text data. Like a member's stage name.", example: '"Felix"' },
        { type: "Integers (int)", desc: "Whole numbers. Like the count of members.", example: "8" },
        { type: "Booleans (bool)", desc: "True/False logic. Like 'Is on tour?'.", example: "True" }
      ],
      practicalExample: "Below is a live look at the SKZ database. Labels on the left are Variables holding the Data on the right.",
      exampleCode: `# VARIABLE NAME  |  VALUE (DATA)\nbias            = 'Bang Chan'   # str\nalbums          = 14            # int\nis_on_tour      = True          # bool`,
      whyItMatters: "If you try to add 'Felix' + 5, Python will crash. Knowing your types keeps your code in sync!"
    },
    2: {
      title: "Numeric Types & Math",
      icon: <Zap size={20} />,
      concept: "Python is a powerful calculator. We use Integers for whole counts (members) and Floats for precise decimals (song durations).",
      variableExamples: [
        { label: "Integer (int)", value: "8", desc: "Whole numbers. Perfect for counting members or albums." },
        { label: "Float (float)", value: "3.45", desc: "Numbers with decimal points. Used for track lengths." },
        { label: "Operators", value: "+ - * / %", desc: "Symbols used to perform calculations between numbers." }
      ],
      dataTypesInfo: [
        { type: "Addition (+)", desc: "Combine values together.", example: "5 + 3" },
        { type: "Subtraction (-)", desc: "Find the difference.", example: "8 - 2" },
        { type: "Multiplication (*)", desc: "Multiply or repeat values.", example: "8 * 2" },
        { type: "Division (/)", desc: "Results in a float (decimal).", example: "10 / 2 = 5.0" },
        { type: "Modulo (%)", desc: "Finds the remainder.", example: "10 % 3 = 1" }
      ],
      practicalExample: "Mission: Calculate the stats for the upcoming SKZ World Tour. We need to handle track totals, time differences, and group divisions.",
      exampleCode: `
    # 1. Addition: Total members
    vocal_line = 4
    dance_line = 4
    total_skz = vocal_line + dance_line  # 8

    # 2. Subtraction: Remaining tracks to perform
    total_setlist = 25
    performed = 10
    remaining = total_setlist - performed  # 15

    # 3. Multiplication: Total tour duration
    cities = 12
    show_length = 2.5  # hours
    total_hours = cities * show_length  # 30.0

    # 4. Division: Average song length
    total_album_time = 42.0
    tracks = 12
    avg_length = total_album_time / tracks  # 3.5

    # 5. Modulo: Grouping members for a unit
    # If we divide 8 members into teams of 3, how many are left?
    leftover = 8 % 3  # 2`,
      whyItMatters: "Computers never make math mistakes, but humans do! Using '/' instead of '%' can lead to incorrect logic in your programs."
    },
    3: {
      title: "Text Data (Strings)",
      icon: <Terminal size={20} />,
      concept: "Strings are sequences of characters wrapped in quotes. In Python, strings are 'immutable'—once created, you don't change them; you create new, modified versions of them.",
      variableExamples: [
        { label: "Concatenation", value: "+", desc: "Joining two strings together into one." },
        { label: "F-Strings", value: "f'{}'", desc: "The modern way to inject variables directly into text." },
        { label: "Methods", value: ".upper() / .lower()", desc: "Built-in functions that transform text casing." }
      ],
      dataTypesInfo: [
        { type: "len()", desc: "Returns the total count of characters, including spaces.", example: "len('Stray Kids') # 10" },
        { type: "Indexing [n]", desc: "Access a specific character using its position (starts at 0).", example: "'SKZ'[0] # 'S'" },
        { type: "Slicing [start:end]", desc: "Extracts a portion of a string between two indices.", example: "'BangChan'[0:4] # 'Bang'" }
      ],
      practicalExample: "Mission: Generate automated concert announcements and verify member nicknames from the SKZ global database.",
      exampleCode: `# 1. Concatenation: Joining text
    prefix = "SKZ-"
    id_num = "2024"
    user_id = prefix + id_num  # "SKZ-2024"

    # 2. F-Strings: Dynamic messaging
    member = "Felix"
    venue = "SoFi Stadium"
    # f-strings let you drop variables into {}
    announcement = f"Welcome {member} to the stage at {venue}!"

    # 3. String Methods: Formatting
    song = "s-class"
    print(song.upper())      # "S-CLASS"
    print(song.capitalize()) # "S-class"

    # 4. Length: Validation
    password = "skz_stay_forever"
    length = len(password)   # 16

    # 5. Indexing: Grab first letter
    name = "Hyunjin"
    first_initial = name[0]  # "H"

    # 6. Slicing: Extracting a 'Sub-string'
    # Grabs characters from index 0 up to (but not including) 4
    group_tag = "StrayKids"
    short_name = group_tag[0:5] # "Stray"`,
      whyItMatters: "Strings are how your code communicates with humans. Master slicing and f-strings to build professional, dynamic user interfaces."
    },
    4: {
      title: "Boolean Logic",
      icon: <Layers size={20} />,
      concept: "Logic is the engine of decision-making. Booleans (True/False) act like digital switches that allow your code to choose different paths based on specific conditions.",
      variableExamples: [
        { label: "Comparison (==)", value: "Equality", desc: "Checks if two values are identical. Use != for 'Not Equal'." },
        { label: "Logical (and/or)", value: "Gates", desc: "Combines multiple conditions into a single True/False result." },
        { label: "Identity (in)", value: "Membership", desc: "Checks if a value exists inside a string or a collection." }
      ],
      dataTypesInfo: [
        { type: "Greater Than (>)", desc: "Checks if the left value is larger than the right.", example: "8 > 3 # True" },
        { type: "Logical 'not'", desc: "Inverse logic. Turns True to False and vice versa.", example: "not True # False" },
        { type: "Identity 'in'", desc: "Checks for a substring within text.", example: "'Felix' in 'Lee Felix'" }
      ],
      practicalExample: "Mission: Security clearance. Verify if a user has the correct ticket status and is on the approved guest list for the SKZ VIP lounge.",
      exampleCode: `# 1. Equality & Inequality
    bias = "Bang Chan"
    is_leader = (bias == "Bang Chan")  # True
    is_maknae = (bias != "I.N")         # True

    # 2. Comparison: Concert Capacity
    current_fans = 50000
    capacity = 45000
    is_sold_out = current_fans >= capacity  # True

    # 3. Logical 'and': Both must be True
    has_ticket = True
    is_on_list = False
    # User needs BOTH to enter
    can_enter_lounge = has_ticket and is_on_list  # False

    # 4. Logical 'or': Only one needs to be True
    has_staff_pass = True
    is_vip = False
    can_access_backstage = has_staff_pass or is_vip  # True

    # 5. Membership: Identity check
    group = "Stray Kids"
    is_skz = "Stray" in group  # True`,
      whyItMatters: "Logic is the 'brain' of your code. Mastering these operators allows you to build complex systems like game mechanics or security firewalls."
    },
    5: {
      title: "Type Conversion",
      icon: <Code2 size={20} />,
      concept: "Data often arrives in the 'wrong' type (e.g., numbers appearing as text). Conversion, or 'Casting,' allows you to force a value into a new type so you can perform specific operations.",
      variableExamples: [
        { label: "int()", value: "To Integer", desc: "Converts text or decimals into whole numbers (rounds down)." },
        { label: "float()", value: "To Float", desc: "Converts integers or text into precise decimal numbers." },
        { label: "str()", value: "To String", desc: "Turns numbers or booleans into text for display." }
      ],
      dataTypesInfo: [
        { type: "int(x)", desc: "Truncates decimals. int(9.9) becomes 9.", example: "int('10') # 10" },
        { type: "float(x)", desc: "Adds a decimal point to whole numbers.", example: "float(5) # 5.0" },
        { type: "str(x)", desc: "Essential for joining numbers with text.", example: "str(8) + ' members'" }
      ],
      practicalExample: "Mission: Process tour data. Convert raw text inputs from a website into numbers for calculation, then back to text for a report.",
      exampleCode: `# 1. Converting String to Float for Math
    # Data from web forms is always a string!
    price_text = "24.99"
    price_numeric = float(price_text)
    total = price_numeric * 2  # 49.98

    # 2. Converting Float to Int (Truncating)
    # Let's say we have 8.7 liters of water, but can only fill whole bottles.
    water = 8.7
    bottles = int(water)  # 8

    # 3. Converting Numbers to Strings
    # You can't print "Members: " + 8 (it crashes!)
    member_count = 8
    message = "SKZ has " + str(member_count) + " members."

    # 4. Nested Conversion
    # Sometimes you have to go from String -> Float -> Int
    raw_input = "14.5"
    rounded_count = int(float(raw_input))  # 14

    # 5. Boolean Conversion
    # Empty things are False, filled things are True
    print(bool(""))      # False
    print(bool("Felix")) # True`,
      whyItMatters: "TypeError is the most common crash for beginners. Explicitly converting your types ensures your program handles data predictably and safely."
    }
  };

  const data = introData[moduleId] || introData[1];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full bg-zinc-900/30 border border-zinc-800 rounded-[3rem] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
      >
        {/* Header */}
        <div className="p-10 border-b border-zinc-800 bg-gradient-to-r from-skz-green/10 to-transparent">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-skz-green animate-pulse">
              {data.icon || <Zap size={20} />}
            </div>
            <span className="text-skz-green font-black tracking-[0.3em] uppercase text-xs text-glow">Mission Briefing: Module 0{moduleId}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">
            {data.title}
          </h1>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">

          {/* 1. Concept */}
          <section>
            <div className="flex items-center gap-3 mb-4 text-zinc-400">
              <BookOpen size={20} />
              <h2 className="font-black uppercase tracking-widest text-sm">1. Core Concept</h2>
            </div>
            <p className="text-xl text-zinc-300 leading-relaxed font-medium mb-8">
              {data.concept}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.variableExamples.map((item, i) => (
                <div key={i} className="bg-skz-green/5 border border-skz-green/20 p-6 rounded-[2rem] relative overflow-hidden group">
                   <div className="relative z-10">
                      <div className="text-[10px] font-black uppercase tracking-widest text-skz-green mb-1">{item.label}</div>
                      <div className="text-2xl font-mono font-black mb-3">{item.value}</div>
                      <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Breakdown */}
          <section>
            <div className="flex items-center gap-3 mb-6 text-zinc-400">
              <Layers size={20} />
              <h2 className="font-black uppercase tracking-widest text-sm">2. System Mechanics</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.dataTypesInfo.map((item, i) => (
                <div key={i} className="bg-white/5 border border-zinc-800 p-5 rounded-3xl hover:bg-white/10 transition-colors">
                  <div className="text-skz-green font-mono text-xs mb-2 uppercase font-black">{item.type}</div>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">{item.desc}</p>
                  <div className="bg-black/50 p-2 rounded-lg text-center font-mono text-skz-green border border-skz-green/20">
                    {item.example}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Practical Example */}
          <section className="bg-black/40 p-8 rounded-[2rem] border border-zinc-800/50">
            <div className="flex items-center gap-3 mb-6 text-skz-green">
              <Lightbulb size={20} />
              <h2 className="font-black uppercase tracking-widest text-sm text-glow">Code Implementation</h2>
            </div>
            <p className="text-zinc-400 mb-6 italic">
              {data.practicalExample}
            </p>
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 font-mono text-sm md:text-base text-skz-green overflow-x-auto relative">
              <div className="absolute top-2 right-4 text-[9px] text-zinc-600 font-black uppercase tracking-widest">skz_interpreter_v1.0</div>
              <pre className="leading-relaxed">{data.exampleCode}</pre>
            </div>
          </section>

          <section className="pb-4">
            <h2 className="font-black uppercase tracking-widest text-[10px] text-zinc-600 mb-2">Instructor Note:</h2>
            <p className="text-zinc-500 italic text-sm">
              {data.whyItMatters}
            </p>
          </section>
        </div>

        {/* Footer Action */}
        <div className="p-8 bg-zinc-900/50 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onBegin}
            className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-skz-green transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl"
          >
            Start Mission <ArrowRight size={20} />
          </button>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #27272a; border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #4ade80; }
        `}} />
      </motion.div>
    </div>
  );
};

export default ModuleIntro;