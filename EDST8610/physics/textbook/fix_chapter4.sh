#!/bin/bash
# This script creates a fixed version of chapter4.tex with \keyword{} replaced by \textbf{}

cd /Volumes/second-store/ai/edu-prompts/EDST8610/physics/textbook

# Make a backup of the original file
cp chapters/chapter4.tex chapters/chapter4_original.tex

# Create a fixed version by replacing \keyword{...} with \textbf{...}
sed 's/\\keyword{/\\textbf{/g' chapters/chapter4.tex > chapters/chapter4_fixed_keyword.tex

# Create a simple test document to use the fixed chapter
cat > test_chapter4.tex << 'EOF'
\documentclass{article}
\usepackage{graphicx}
\usepackage{hyperref}
\usepackage{amsmath,amssymb}
\usepackage{tcolorbox}
\usepackage{float}
\usepackage{placeins}

\newenvironment{keyconcept}[1]{%
    \begin{tcolorbox}[title=\textbf{Key Concept: #1}]
}{%
    \end{tcolorbox}%
}

\newenvironment{tieredquestions}[1]{%
    \begin{tcolorbox}[title=\textbf{Practice Questions - #1}]
}{%
    \end{tcolorbox}%
}

\newenvironment{stopandthink}{%
    \begin{tcolorbox}[title=\textbf{Stop and Think}]
}{%
    \end{tcolorbox}%
}

\newenvironment{investigation}[1]{%
    \begin{tcolorbox}[title=\textbf{Investigation: #1}]
}{%
    \end{tcolorbox}%
}

\newenvironment{example}{%
    \begin{tcolorbox}[title=\textbf{Example}]
}{%
    \end{tcolorbox}%
}

\newenvironment{blockquote}{%
    \begin{quote}\itshape
}{%
    \end{quote}%
}

\newcommand{\marginnote}[1]{}
\newcommand{\FloatBarrier}{}
\newcommand{\challengeicon}{*}
\newcommand{\challenge}[1]{}
\newcommand{\mathlink}[1]{}
\newcommand{\historylink}[1]{}
\newcommand{\marginfigure}[2][0pt]{\begin{figure}[H]}
\newcommand{\endmarginfigure}{\end{figure}}

\title{Testing Chapter 4}
\author{Test}
\date{\today}

\begin{document}

\maketitle

\input{chapters/chapter4_fixed_keyword}

\end{document}
EOF

echo "Fixed files created. You can now compile with: pdflatex test_chapter4.tex"
