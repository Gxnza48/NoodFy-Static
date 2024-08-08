const mobileMenu = document.getElementById('mobile-menu');
        const nav = document.querySelector('nav ul');
        mobileMenu.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            mobileMenu.classList.toggle('toggle');
        });

        let sections = document.querySelectorAll('section');

        window.onscroll = () => {
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                
                if (top >= offset && top < offset + height) {
                    sec.classList.add('show-animate');
                } else {
                    sec.classList.remove('show-animate');
                }
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            const taskInput = document.getElementById('task-input');
            const addTaskBtn = document.getElementById('add-task-btn');
            const taskList = document.getElementById('task-list');
        
            function addTask() {
                const taskValue = taskInput.value.trim();
                if (taskValue === '') return;
        
                // Create new task element
                const taskItem = document.createElement('li');
                taskItem.className = 'task-item';
                
                const taskName = document.createElement('span');
                taskName.className = 'task-name';
                taskName.textContent = taskValue;
        
                const taskActions = document.createElement('div');
                taskActions.className = 'task-actions';
                
                const markCompleteBtn = document.createElement('button');
                markCompleteBtn.textContent = 'Hecho';
                markCompleteBtn.onclick = () => {
                    taskName.style.textDecoration = 'line-through';
                    markCompleteBtn.style.display = 'none';
                };
        
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Eliminar';
                deleteBtn.onclick = () => {
                    taskList.removeChild(taskItem);
                };
        
                taskActions.appendChild(markCompleteBtn);
                taskActions.appendChild(deleteBtn);
        
                taskItem.appendChild(taskName);
                taskItem.appendChild(taskActions);
        
                taskList.appendChild(taskItem);
        
                // Clear input
                taskInput.value = '';
            }
        
            addTaskBtn.addEventListener('click', addTask);
        
            taskInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    addTask();
                }
            });
        
            // Mobile menu toggle
            const menuToggle = document.getElementById('mobile-menu');
            const navLinks = document.querySelector('nav ul');
            
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('nav-active');
                menuToggle.classList.toggle('active');
            });
        });
        