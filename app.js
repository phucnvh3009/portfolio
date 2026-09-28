/**
 * PORTFOLIO JAVASCRIPT - NGUYỄN VŨ HOÀNG PHÚC
 * Interactive features: Mobile Nav, Theme Toggle, Project Filter, Modal Popup, Contact Toast
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. PROJECT DATA REPOSITORY (Chi tiết các dự án tiêu biểu)
     ========================================================================== */
  const projectsData = {
    1: {
      title: 'FCode Platform — Nền Tảng Học Lập Trình',
      category: 'Web Application',
      categoryTag: 'webapp',
      description: 'FCode Platform là một hệ sinh thái học tập và luyện tập thuật toán dành riêng cho sinh viên kỹ thuật phần mềm. Nền tảng cung cấp kho bài tập lập trình đa dạng từ cơ bản đến nâng cao, hỗ trợ trình biên dịch trực tuyến, chấm bài tự động và diễn đàn thảo luận giải thuật.',
      features: [
        'Hệ thống quản lý tài khoản, phân quyền sinh viên và giảng viên',
        'Trình soạn thảo mã nguồn tích hợp (Code Editor) với gợi ý cú pháp',
        'Hệ thống chấm điểm kiểm thử tự động (Auto-grader test cases)',
        'Diễn đàn hỏi đáp, bình luận và chia sẻ lời giải tối ưu',
        'Bảng xếp hạng thành tích (Leaderboard) theo tuần/tháng'
      ],
      tech: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Git Flow'],
      liveUrl: 'https://github.com/phucnvh3009',
      repoUrl: 'https://github.com/phucnvh3009'
    },
    2: {
      title: 'Minimalist E-Commerce — Cửa Hàng Thời Trang',
      category: 'Frontend UI',
      categoryTag: 'frontend',
      description: 'Website bán hàng thời trang với phong cách thiết kế tối giản, tập trung vào tốc độ tải trang nhanh và trải nghiệm người dùng mượt mà. Toàn bộ logic giỏ hàng và bộ lọc được xây dựng bằng Vanilla JavaScript thuần để tối ưu hiệu năng tối đa.',
      features: [
        'Lọc sản phẩm đa chiều theo danh mục, khoảng giá và kích cỡ không tải lại trang',
        'Giỏ hàng tương tác thời gian thực, lưu trữ dữ liệu giỏ hàng qua LocalStorage',
        'Giao diện thanh toán mô phỏng thân thiện, xác thực form thanh toán',
        'Thiết kế chuẩn Mobile-first, hiển thị sắc nét trên mọi kích thước màn hình'
      ],
      tech: ['HTML5 (Semantic)', 'CSS Grid & Flexbox', 'Vanilla JavaScript (ES6+)', 'LocalStorage API'],
      liveUrl: 'https://github.com/phucnvh3009',
      repoUrl: 'https://github.com/phucnvh3009'
    },
    3: {
      title: 'Agile Scrum Task Board — Quản Lý Sprint',
      category: 'Web Application',
      categoryTag: 'webapp',
      description: 'Ứng dụng quản trị công việc nhóm mô phỏng bảng Kanban theo phương pháp luận Agile/Scrum. Hỗ trợ tạo Sprint, quản lý User Story, gán nhãn độ ưu tiên và theo dõi trạng thái công việc trực quan.',
      features: [
        'Kéo và thả (Drag & Drop) thẻ công việc mượt mà giữa các cột: To Do, In Progress, Review, Done',
        'Tạo, chỉnh sửa, xóa User Story kèm mã vé tự sinh (vd: TASK-102)',
        'Tính toán biểu đồ tiến độ Sprint Burndown Chart cơ bản',
        'Lưu trữ trạng thái làm việc offline với cơ chế đồng bộ LocalStorage'
      ],
      tech: ['HTML5 Drag & Drop API', 'CSS Variables', 'JavaScript OOP', 'Agile Mindset'],
      liveUrl: 'https://github.com/phucnvh3009',
      repoUrl: 'https://github.com/phucnvh3009'
    },
    4: {
      title: 'Weather Scope — Ứng Dụng Dự Báo Thời Tiết',
      category: 'Frontend UI',
      categoryTag: 'frontend',
      description: 'Ứng dụng tra cứu thông tin khí hậu và thời tiết theo thời gian thực tại hơn 200,000 thành phố trên thế giới. Tự động nhận diện vị trí người dùng thông qua Geolocation API và hiển thị cảnh báo chỉ số UV, độ ẩm, sức gió.',
      features: [
        'Tự động định vị vị trí hiện tại với Geolocation API',
        'Tìm kiếm địa điểm toàn cầu có gợi ý nhanh (Autocomplete)',
        'Biểu đồ trực quan hóa nhiệt độ 24 giờ và dự báo 7 ngày tới',
        'Hiệu ứng hình nền động thay đổi linh hoạt theo điều kiện thời tiết (Nắng, Mưa, Tuyết, Mây mù)'
      ],
      tech: ['OpenWeather REST API', 'JavaScript Fetch API', 'Chart.js', 'Responsive CSS'],
      liveUrl: 'https://github.com/phucnvh3009',
      repoUrl: 'https://github.com/phucnvh3009'
    },
    5: {
      title: 'Git Branch Visualizer — Mô Phỏng Cây Nhánh',
      category: 'Công cụ & Tools',
      categoryTag: 'tools',
      description: 'Công cụ web tương tác đồ họa giúp sinh viên và lập trình viên mới bắt đầu hình dung trực quan cơ chế hoạt động của Git. Đặc biệt hỗ trợ so sánh trực quan từng bước giữa hai thao tác quan trọng nhất: `git merge` và `git rebase`.',
      features: [
        'Vẽ cây commit động bằng SVG Canvas tương tác',
        'Mô phỏng từng bước: git commit, git branch, git checkout, git merge, git rebase',
        'Minh họa trực quan xung đột mã nguồn (Merge Conflict) và cách Git giải quyết',
        'Chế độ Quiz tương tác kiểm tra kiến thức về lệnh Git'
      ],
      tech: ['SVG / Canvas Rendering', 'Algorithms & Data Structures', 'Git Internals Theory'],
      liveUrl: 'https://github.com/phucnvh3009',
      repoUrl: 'https://github.com/phucnvh3009'
    },
    6: {
      title: 'Personal Finance Tracker — Quản Lý Thu Chi',
      category: 'Web Application',
      categoryTag: 'webapp',
      description: 'Ứng dụng quản lý tài chính và lập kế hoạch ngân sách thông minh. Giúp người dùng phân loại các khoản chi tiêu hàng tháng, đặt hạn mức cảnh báo chi tiêu vượt ngưỡng và tổng hợp báo cáo tài chính trực quan.',
      features: [
        'Ghi nhận thu chi nhanh chóng với các danh mục thiết yếu (Ăn uống, Học tập, Giải trí...)',
        'Biểu đồ tròn thể hiện tỷ trọng chi tiêu và biểu đồ cột so sánh thu - chi',
        'Bộ lọc báo cáo theo tuần, tháng và năm',
        'Xuất dữ liệu lịch sử tài chính ra định dạng CSV/Excel'
      ],
      tech: ['Chart.js', 'JavaScript Modules', 'LocalStorage API', 'CSS Glassmorphism'],
      liveUrl: 'https://github.com/phucnvh3009',
      repoUrl: 'https://github.com/phucnvh3009'
    }
  };

  /* ==========================================================================
     2. MOBILE MENU TOGGLE
     ========================================================================== */
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Tự động đóng menu khi nhấp vào một link điều hướng
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });

  /* ==========================================================================
     3. THEME TOGGLE (DARK / LIGHT MODE)
     ========================================================================== */
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  }

  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('portfolio-theme', 'light');
    }
  });

  /* ==========================================================================
     4. ACTIVE NAVIGATION LINK ON SCROLL
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (activeLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          activeLink.classList.add('active-link');
        } else {
          activeLink.classList.remove('active-link');
        }
      }
    });
  });

  /* ==========================================================================
     5. TYPING TEXT ANIMATION IN HERO
     ========================================================================== */
  const typingElement = document.getElementById('typing-text');
  const roles = [
    'Software Engineering Student',
    'Frontend & Web Developer',
    'Git Flow & Agile Practitioner',
    'Clean Code Enthusiast'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800; // Nghỉ một chút sau khi gõ xong
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }
  typeEffect();

  /* ==========================================================================
     6. PROJECT FILTERING (Tất cả, Web App, Frontend, Tools)
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     7. PROJECT DETAILS MODAL POPUP
     ========================================================================== */
  const projectModal = document.getElementById('project-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalContent = document.getElementById('modal-content');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalContent.innerHTML = `
      <span class="modal-category">${data.category}</span>
      <h3 class="modal-title">${data.title}</h3>
      <p class="modal-description">${data.description}</p>
      
      <h4 class="modal-section-title"><i class="fa-solid fa-list-check" style="color: var(--accent-primary); margin-right: 0.5rem;"></i>Tính năng nổi bật:</h4>
      <ul class="modal-features">
        ${data.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('')}
      </ul>

      <h4 class="modal-section-title"><i class="fa-solid fa-layer-group" style="color: var(--accent-secondary); margin-right: 0.5rem;"></i>Công nghệ sử dụng:</h4>
      <div class="modal-tech">
        ${data.tech.map(t => `<span class="skill-pill" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;"><i class="fa-solid fa-tag"></i> ${t}</span>`).join('')}
      </div>

      <div class="modal-actions">
        <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1; justify-content: center;">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Xem Demo Trực Tiếp
        </a>
        <a href="${data.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="flex: 1; justify-content: center;">
          <i class="fa-brands fa-github"></i> Mã Nguồn GitHub
        </a>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Khóa cuộn trang nền
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto'; // Mở lại cuộn trang
  }

  // Bắt sự kiện click mở modal trên các card dự án
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openProjectModal(id);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeProjectModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeProjectModal);

  // Nhấn ESC để đóng modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  /* ==========================================================================
     8. CONTACT FORM SUBMISSION & TOAST NOTIFICATION
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const btnSubmit = document.getElementById('btn-submit');
  const toast = document.getElementById('toast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Hiệu ứng gửi tin
      const originalText = btnSubmit.innerHTML;
      btnSubmit.innerHTML = `<span>Đang gửi...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
      btnSubmit.disabled = true;

      setTimeout(() => {
        btnSubmit.innerHTML = originalText;
        btnSubmit.disabled = false;
        contactForm.reset();

        // Hiển thị Toast thông báo
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 4000);
      }, 1200);
    });
  }
});
