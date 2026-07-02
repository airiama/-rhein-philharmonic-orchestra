// 영상 변경
function changeVideo(videoId) {
    const player = document.getElementById("player");
    player.src = "https://www.youtube.com/embed/" + videoId;
}

// 재생
function playVideo() {
    const player = document.getElementById("player");
    player.src = player.src;
}

// 정지
function pauseVideo() {
    const player = document.getElementById("player");
    player.src = "";
}

//갤러리 슬라이더
const slides = document.getElementById("slides");
const slide = document.querySelector(".slide");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 1;
let isMoving = false; // ← 핵심 (이동 중인지 체크)

const slideWidth = slide.clientWidth;

// 초기 위치
slides.style.transform = `translateX(-${slideWidth * index}px)`;

// 오른쪽 버튼
nextBtn.addEventListener("click", () => {
    if(isMoving) return; // ← 이동 중이면 무시
    isMoving = true;

    index++;
    slides.style.transition = "0.5s";
    slides.style.transform = `translateX(-${slideWidth * index}px)`;
});

// 왼쪽 버튼
prevBtn.addEventListener("click", () => {
    if(isMoving) return; // ← 이동 중이면 무시
    isMoving = true;

    index--;
    slides.style.transition = "0.5s";
    slides.style.transform = `translateX(-${slideWidth * index}px)`;
});

// 애니메이션 끝났을 때
slides.addEventListener("transitionend", () => {
    const slidesCount = document.querySelectorAll(".slide").length;

    // 마지막 → 첫번째
    if(index === slidesCount - 1){
        slides.style.transition = "none";
        index = 1;
        slides.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    // 첫번째 → 마지막
    if(index === 0){
        slides.style.transition = "none";
        index = slidesCount - 2;
        slides.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    isMoving = false; // ← 이동 끝나면 다시 클릭 허용
});

// 헤더 링크 클릭 시 부드럽게 스크롤
document.querySelectorAll('.header a, .logo a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // 기본 링크 이동 막기
        const targetId = link.getAttribute('href').slice(1); // # 제거
        const target = document.getElementById(targetId);
        if(target){
            window.scrollTo({
                top: target.offsetTop - 80, // 헤더 높이만큼 오프셋
                behavior: 'smooth'
            });
        }
    });
});

