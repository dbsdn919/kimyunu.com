document.addEventListener('DOMContentLoaded', () => {
    const phoneLink = document.getElementById('phone-link');
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.getElementById('close-modal');
    
    // 전화번호 클릭 시 모달 열기
    phoneLink.addEventListener('click', (e) => {
        e.preventDefault(); // 기본 전화 연결 막기
        modal.classList.add('show');
    });

    // 취소 버튼 클릭 시 모달 닫기
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('show');
    });

    // 배경 클릭 시 모달 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});
