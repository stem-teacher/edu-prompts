// utils/makeLessonTree.js
export default function makeLessonTree(data, defaultWeeks = 10) {
  // if we got the wrapper object, pull out lessons + meta
  const lessons = Array.isArray(data) ? data : data.lessons || [];
  const weeks = Array.isArray(data)
    ? defaultWeeks
    : data.totalWeeks || defaultWeeks;

  const weekNodes = Array.from({ length: weeks }, (_, i) => ({
    name: `Week ${i + 1}`,
    children: [],
  }));

  lessons.forEach((lsn) => {
    const w = +lsn.lessonId.match(/W(\d+)L/)[1] - 1;
    weekNodes[w].children.push({ ...lsn, name: lsn.title });
  });

  return { name: "Data Science 2 (Stage 5)", children: weekNodes };
}
