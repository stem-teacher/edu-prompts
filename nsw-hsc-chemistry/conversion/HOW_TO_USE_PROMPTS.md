# How to Use the Claude Conversion Prompts

This directory contains two prompts for converting ANY NSW HSC Chemistry exam paper (2014-2025) from PDF to Quarto markdown format.

**Key Features:**
- ✅ Year-agnostic - works with any exam year
- ✅ Auto-detects exam structure and question counts
- ✅ Adapts to variations between years
- ✅ Generates year-specific filenames automatically

## Which Prompt to Use?

### Option 1: QUICK_PROMPT.md ⚡ (Recommended)
**Use this if:** You want a fast, straightforward conversion

**Size:** ~1 page

**Best for:**
- Quick conversions
- When you're familiar with the process
- Standard PDF-to-Quarto conversions
- When token budget is limited

**How to use:**
1. Open `QUICK_PROMPT.md`
2. Copy the entire content between the `---` markers
3. Paste into a new Claude chat
4. Upload your PDF
5. Claude will create the complete project structure

---

### Option 2: CLAUDE_CONVERSION_PROMPT.md 📚 (Comprehensive)
**Use this if:** You want maximum detail and examples

**Size:** ~4 pages

**Best for:**
- First-time conversions
- Complex documents
- When you want extensive examples
- Teaching Claude specific formatting preferences
- Quality assurance requirements

**How to use:**
1. Open `CLAUDE_CONVERSION_PROMPT.md`
2. Copy the entire content
3. Paste into a new Claude chat
4. Upload your PDF
5. Claude will follow the detailed specifications

---

## What Each Prompt Provides

Both prompts will result in Claude creating:

✅ Complete .qmd file with all questions (named `[YEAR]-hsc-chemistry.qmd`)
✅ README.md with year-specific documentation
✅ extract_images.py script (with correct page numbers for that year)
✅ Makefile for building (using year-specific filename)
✅ Image directory structure
✅ SUMMARY.md with next steps

**Claude will automatically:**
- Detect the year from the PDF
- Count questions in each section
- Identify all images with page numbers
- Create appropriate filenames and references  

### Key Differences:

| Feature | Quick Prompt | Comprehensive Prompt |
|---------|-------------|---------------------|
| Length | 1 page | 4 pages |
| Examples | Basic | Extensive |
| Specifications | Essential | Detailed |
| Quality checklist | Implied | Explicit |
| Image handling | Basic | Detailed with methods |
| Best practices | Summary | Full guidelines |

---

## Working With Different Exam Years

### Supported Years
These prompts work with HSC Chemistry exams from **2014 to 2025** (and future years).

### How Year Detection Works
1. Claude reads the PDF title page
2. Extracts the year from the document
3. Uses this year throughout all filenames and documentation
4. Example: For 2023 exam, creates `2023-hsc-chemistry.qmd`

### Variations Between Years
Different exam years may have:
- **Different question counts** (e.g., 15 vs 20 multiple choice)
- **Different mark allocations**
- **Different numbers of images**
- **Different section structures**
- **Different sub-question styles** (a/b/c vs i/ii/iii)

The prompts are designed to handle all these variations automatically.

### Which Years Work Best
- **2019-2025**: Most standardized format, easiest conversion
- **2014-2018**: May have more format variations, still fully supported
- **Future years**: Prompts designed to adapt to reasonable format changes

---

## Step-by-Step Usage

### Using QUICK_PROMPT.md:

1. **Open new Claude chat**
   - Go to claude.ai
   - Start new conversation

2. **Copy the prompt**
   ```bash
   # View the prompt
   cat QUICK_PROMPT.md
   # Copy everything between the --- markers
   ```

3. **Paste into Claude**
   - Paste the entire prompt text
   - Don't send yet!

4. **Attach your PDF**
   - Click attachment button
   - Upload your exam PDF

5. **Send**
   - Claude will read the prompt and PDF
   - Will create complete project structure

6. **Wait for completion**
   - Claude will create all files
   - Will explain what needs to be done next
   - Will list required images

---

### Using CLAUDE_CONVERSION_PROMPT.md:

Same process as above, but with the comprehensive prompt file.

---

## Tips for Best Results

### 1. **Provide Clear Context** (Optional)
After pasting the prompt, you can add:
```
Additional context:
- This is a chemistry exam from [year/institution]
- Pay special attention to [specific aspects]
- Use [preferred directory location]
```

### 2. **Specify Directory Location**
Add to your prompt:
```
Please create all files in: /Users/[username]/Documents/[project-name]/
```

### 3. **Highlight Special Requirements**
If your document has unique features:
```
Note: This document also includes:
- Complex organic chemistry structures
- Multiple graph types
- Special notation for [topic]
```

### 4. **Request Previews**
You can ask:
```
Before creating all files, please show me:
- The proposed YAML header
- An example of how you'll format Question 1
- The image extraction strategy
```

---

## After Claude Completes the Conversion

### Immediate Next Steps:

1. **Review the created files**
   - Check .qmd file is complete
   - Verify README.md is comprehensive
   - Test that extract_images.py exists

2. **Extract images**
   - Follow the README instructions
   - Use the Python script or manual method
   - Place in images/ directory

3. **Test the build**
   ```bash
   make check-images  # Verify images present
   make render        # Build the PDF
   ```

4. **Review output**
   - Compare to original PDF
   - Check chemistry notation
   - Verify all questions present

### If You Need Adjustments:

Continue the conversation with Claude:
```
The conversion looks good! Can you please:
- Adjust the spacing in Question 15
- Add more detail to the image extraction instructions
- Include the formulae sheet content from pages 41-44
```

---

## Common Issues & Solutions

### Issue: "Claude didn't include all questions"
**Solution:** In the same chat, say:
```
I notice Questions 15-20 are missing. Please add them to the .qmd file.
```

### Issue: "Chemical notation isn't rendering correctly"
**Solution:** Ask Claude:
```
Please review all chemical formulas and ensure they use \ce{} notation from mhchem package.
```

### Issue: "Images aren't properly sized"
**Solution:** Specify:
```
Please adjust image placeholders to use these widths:
- Small diagrams: 40%
- Medium graphs: 70%
- Full-width structures: 90%
```

### Issue: "Need different directory structure"
**Solution:** Request:
```
Please reorganize the files into:
- docs/ for .qmd and .md files
- assets/ for images
- scripts/ for .py files
```

---

## Customizing the Prompts

You can modify either prompt before using it:

### Add Your Preferences:
```markdown
Additional requirements:
- Use American spelling throughout
- Include line numbers in code blocks
- Add table of contents
- Use specific citation style
```

### Change Default Settings:
```yaml
format:
  pdf:
    geometry: [margin=2cm]  # Change from 2.5cm
    fontsize: 12pt          # Change from 11pt
```

### Specify Tools:
```markdown
For image extraction, prefer:
- Method 1: [your preferred method]
- Provide detailed instructions for [specific tool]
```

---

## For Different Document Types

These prompts can be adapted for:

- **Other exam papers:** Change subject-specific packages
- **Textbooks:** Add chapter structure
- **Reports:** Modify sectioning
- **Academic papers:** Add bibliography support

Modify the YAML header and structural requirements accordingly.

---

## Getting Help

If you encounter issues:

1. **Check the SUMMARY.md** in your output
2. **Review the README.md** Claude created
3. **Ask Claude in the same chat** for clarifications
4. **Start fresh** with the other prompt if needed

---

## Success Checklist

Before closing the Claude session, verify:

- [ ] All files created in correct directory
- [ ] .qmd file includes all questions
- [ ] README.md has clear image extraction steps
- [ ] Image list complete with page numbers
- [ ] Build instructions are clear
- [ ] Example commands provided
- [ ] Next steps documented

---

## Example Conversation Flow

### Example 1: Converting 2024 Exam
```
You: [Paste QUICK_PROMPT.md content]
     [Attach 2024-hsc-chemistry.pdf]
     [Send]

Claude: I've analyzed the PDF. This is the 2024 HSC Chemistry exam with:
        - Section I: 20 multiple choice questions
        - Section II: 17 extended response questions
        - 15 images identified for extraction

        Creating conversion files...
        [Creates 2024-hsc-chemistry.qmd and supporting files]

        Here's what I've created: [lists files]
        Next steps: [extraction instructions]

You: Thanks! Can you also add the data sheet?

Claude: I'll add that section now.
        [Updates 2024-hsc-chemistry.qmd]
```

### Example 2: Converting 2018 Exam
```
You: [Paste QUICK_PROMPT.md content]
     [Attach chemistry-hsc-exam-2018.pdf]
     [Send]

Claude: I've analyzed the PDF. This is the 2018 HSC Chemistry exam with:
        - Section I: 20 multiple choice questions
        - Section II: 16 extended response questions (Questions 21-36)
        - 12 images identified for extraction
        - Note: Uses different subquestion style (i, ii, iii)

        Creating conversion files...
        [Creates 2018-hsc-chemistry.qmd adapted to 2018 format]
```

### Example 3: Requesting Adjustments
```
You: Perfect! One more thing - can you make the image extraction
     script more detailed?

Claude: [Updates extract_images.py with detailed instructions]
```

---

## Version History

- **v2.0** (Current) - Year-agnostic prompts
  - Updated to handle any HSC Chemistry exam year (2014-2025+)
  - Auto-detects exam year and structure
  - Adapts to variations between years
  - Generates year-specific filenames
  - Both QUICK and COMPREHENSIVE versions updated

- **v1.0** - Initial prompts created
  - Specifically designed for 2025 exam
  - Both QUICK and COMPREHENSIVE versions
  - Tested with HSC Chemistry 2025 exam

---

## Quick Reference

**Want to convert a 2024 exam?** → Use either prompt, attach PDF, Claude handles the rest

**Want to convert a 2018 exam?** → Use either prompt, attach PDF, Claude adapts automatically

**Not sure which prompt?** → Start with QUICK_PROMPT.md

**Need extensive examples?** → Use CLAUDE_CONVERSION_PROMPT.md

---

Remember: Both prompts are designed to work well with ANY exam year. Choose based on your needs for detail vs. brevity!
