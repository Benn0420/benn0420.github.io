const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isVisible = answer.style.display === 'block';

    // Hide all other answers
    document.querySelectorAll('.faq-answer').forEach((answer) => {
      answer.style.display = 'none';
    });

    // Toggle the clicked question's answer
    answer.style.display = isVisible ? 'none' : 'block';
  });
});
