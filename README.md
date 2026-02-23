<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>上古通天的智慧学  · 古籍书柜</title>
    <style>
        /* --- 核心风格保留 (基于您上传的文件) --- */
        :root {
            --bg-color: #d4b477; /* 羊皮纸底色 */
            --text-color: #3b2f2f; /* 深褐墨水色 */
            --border-color: #5c4033; /* 旧木框色 */
            --accent-color: #8b0000; /* 封印红 */
            --font-main: "Georgia", "Times New Roman", serif;
            --font-gothic: "UnifrakturMaguntia", "Kaiti SC", serif; /* 尝试加载哥特字体，没有则用楷体 */
        }

        @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap');

        body {
            background-color: var(--bg-color);
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
            color: var(--text-color);
            font-family: var(--font-main);
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        .library-container {
            max-width: 1440px;
            width: 100%;
            border: 4px double var(--border-color);
            padding: 40px;
            background: rgba(255, 255, 255, 0.4);
            box-shadow: 0 0 20px rgba(60, 40, 20, 0.3);
            position: relative;
        }

        /* 装饰角标 */
        .library-container::before, .library-container::after {
            content: "✠";
            position: absolute;
            font-size: 2em;
            color: var(--accent-color);
            font-family: var(--font-gothic);
        }
        .library-container::before { top: 10px; left: 10px; }
        .library-container::after { bottom: 10px; right: 10px; }

        header {
            text-align: center;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 20px;
            margin-bottom: 30px;
        }

        h1 {
            font-family: var(--font-gothic);
            font-size: 2.5em;
            margin: 0;
            color: #2a1a1a;
            text-shadow: 1px 1px 0px rgba(0,0,0,0.1);
        }

        .subtitle {
            font-style: italic;
            font-size: 1.1em;
            margin-top: 10px;
            color: #5d4037;
        }

        .decorative-line {
            text-align: center;
            margin: 15px 0;
            font-size: 1.2em;
            letter-spacing: 5px;
            color: var(--accent-color);
        }

        /* 搜索框风格化 */
        .search-wrapper {
            text-align: center;
            margin-bottom: 30px;
        }

        #searchInput {
            background: transparent;
            border: none;
            border-bottom: 2px solid var(--border-color);
            font-family: var(--font-main);
            font-size: 1.2em;
            color: var(--text-color);
            padding: 10px;
            width: 80%;
            text-align: center;
            outline: none;
            transition: border-color 0.3s;
        }

        #searchInput:focus {
            border-bottom-color: var(--accent-color);
        }

        #searchInput::placeholder {
            color: #242424;
            font-style: italic;
        }

        /* 书籍列表网格 */
        .book-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 25px;
            list-style: none;
            padding: 0;
        }

        .book-item {
            background: rgba(255, 255, 255, 0.6);
            border: 1px solid #d7ccc8;
            padding: 15px;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 120px;
            position: relative;
        }

        .book-item:hover {
            background: #fff;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(92, 64, 51, 0.2);
            border-color: var(--accent-color);
        }

        .book-title {
            font-weight: bold;
            font-size: 1.1em;
            margin-bottom: 5px;
            font-family: var(--font-gothic);
        }

        .book-meta {
            font-size: 0.85em;
            color: #6d4c41;
            font-style: italic;
        }

        .no-results {
            grid-column: 1 / -1;
            text-align: center;
            font-style: italic;
            color: #8d6e63;
            padding: 20px;
        }

        footer {
            margin-top: 40px;
            text-align: center;
            font-size: 0.8em;
            border-top: 1px solid var(--border-color);
            padding-top: 15px;
            color: #6d4c41;
        }

        /* 响应式调整 */
        @media (max-width: 600px) {
            .library-container {
                padding: 20px;
                border-width: 2px;
            }
            h1 { font-size: 1.8em; }
            .book-list { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <div class="library-container">
        <header>
            <h1>BIBLIOTHECA MYSTICA</h1>
            <div class="subtitle">上古通天的智慧学 · 古籍书柜</div>
            <div class="decorative-line">✠ 对应学古籍 · 灵学手稿 · 中世纪北欧之光 ✠</div>
            <p style="font-size: 0.9em; margin-top: 10px;">—— 手抄本目录 · 尘封的记忆 ——</p>
        </header>

        <div class="search-wrapper">
            <input type="text" id="searchInput" placeholder="🔍 检索古籍名称或作者..." onkeyup="filterBooks()">
        </div>

        <!-- 书籍列表容器 -->
        <ul class="book-list" id="bookListContainer">
            <!-- 书籍将通过 JavaScript 自动填充到这里 -->
        </ul>

        <footer>
         
            <p>✠亘古不言：微信13965712213✠</p>
        </footer>
    </div>

    <script>
        // ==========================================
        // ⚙️ 配置区域：请在此处录入您的30+本书籍信息
        // ==========================================
        const booksData = [
            // 格式：{ title: "书名", author: "作者/备注", file: "books/文件名.html" },
            // 示例：
            { title: "属天的奥秘(第一卷）", author: "内义解读", file: "books/1.html" },
            { title: "属天的奥秘(第二卷）", author: "内义解读", file: "books/2.html" },
            { title: "属天的奥秘(第三卷)", author: "内义解读", file: "books/3.html" },
            { title: "属天的奥秘(第四卷)", author: "内义解读", file: "books/4.html" },
            { title: "属天的奥秘(第五卷)", author: "内义解读", file: "books/5.html" },
            { title: "属天的奥秘(第六卷)", author: "内义解读", file: "books/6.html" },
            { title: "属天的奥秘(第七卷)", author: "内义解读", file: "books/7.html" },
             { title: "属天的奥秘(第八卷)", author: "内义解读", file: "books/8.html" },

            { title: "属天的奥秘(第九卷)", author: "内义解读", file: "books/9.html" },
            { title: "属天的奥秘(第十卷)", author: "内义解读", file: "books/10.html" },
            { title: "属天的奥秘(第十一卷)", author: "内义解读", file: "books/11.html" },
            { title: "属天的奥秘(第十二卷)", author: "内义解读", file: "books/12.html" },
            { title: "揭秘《启示录》(上)", author: "内义解读", file: "books/13.html" },
            { title: "揭秘《启示录》(下)", author: "内义解读", file: "books/14.html" },
            { title: "马太福音内义探索", author: "内义解读", file: "books/15.html" },
             { title: "《圣经学习指南》——约翰福音", author: "内义解读", file: "books/16.html" },

            { title: "《圣经学习指南》——创世记", author: "内义解读", file: "books/17.html" },
            { title: "真实的基督教(上)", author: "内义解读", file: "books/18.html" },
            { title: "真实的基督教(下)", author: "内义解读", file: "books/19.html" },
             { title: "新耶路撒冷及其属天教义", author: "内义解读", file: "books/20.html" },
                  { title: "新耶路撒冷教义之主篇", author: "内义解读", file: "books/21.html" },
            { title: "新耶路撒冷教义之圣经篇", author: "内义解读", file: "books/22.html" },
            { title: "新耶路撒冷教义之信仰篇", author: "内义解读", file: "books/23.html" },
             { title: "新耶路撒冷教义之生活篇", author: "内义解读", file: "books/24.html" },

            { title: "新教会教义纲要", author: "内义解读", file: "books/25.html" },
            { title: "圣爱与圣智", author: "内义解读", file: "books/26.html" },
            { title: "婚姻之爱", author: "内义解读", file: "books/27.html" },
             { title: "天堂与地狱", author: "内义解读", file: "books/28.html" },
                  { title: "天堂与地狱完整", author: "内义解读", file: "books/29.html" },
            { title: "圣治", author: "内义解读", file: "books/30.html" },
            { title: "最后的审判", author: "内义解读", file: "books/31.html" },
             { title: "最后的审判（续）", author: "内义解读", file: "books/32.html" },
     { title: "白马", author: "内义解读", file: "books/33.html" },

     { title: "字义与灵义", author: "内义解读", file: "books/34.html" },

     { title: "宇宙星球", author: "内义解读", file: "books/35.html" },

     { title: "十诫", author: "内义解读", file: "books/36.html" },
     { title: "灵魂和身体的相互作用", author: "内义解读", file: "books/37.html" },

     { title: "神救主", author: "内义解读", file: "books/38.html" },

     { title: "新教会的邀请", author: "内义解读", file: "books/39.html" },

     { title: "迦得与亚设", author: "内义解读", file: "books/40.html" },
     { title: "关于主", author: "内义解读", file: "books/41.html" },

     { title: "流注", author: "内义解读", file: "books/42.html" },

     { title: "与天使的对话", author: "内义解读", file: "books/43.html" },

     { title: "五个记事", author: "内义解读", file: "books/44.html" },
     { title: "九个问题", author: "内义解读", file: "books/45.html" },

     { title: "与加尔文和他的五十个追随者的对话", author: "内义解读", file: "books/46.html" },

     { title: "新教会教育理念", author: "内义解读", file: "books/47.html" },

     { title: "来生", author: "内义解读", file: "books/48.html" },
     { title: "《白马》附录", author: "内义解读", file: "books/49.html" },

     { title: "灵界经历摘录", author: "内义解读", file: "books/50.html" },

     { title: "圣治", author: "内义解读", file: "books/51.html" },     
            
     

        ];

        // ==========================================
        // ⚙️ 逻辑区域 (无需修改，除非您懂JS)
        // ==========================================
        
        const listContainer = document.getElementById('bookListContainer');
        const searchInput = document.getElementById('searchInput');

        function renderBooks(books) {
            listContainer.innerHTML = ''; // 清空列表

            if (books.length === 0) {
                listContainer.innerHTML = '<li class="no-results">未找到相关古籍...</li>';
                return;
            }

            books.forEach(book => {
                const li = document.createElement('li');
                li.className = 'book-item';
                // 点击跳转
                li.onclick = () => {
                    window.open(book.file, '_blank');
                };

                li.innerHTML = `
                    <div class="book-title">${book.title}</div>
                    <div class="book-meta">${book.author ? '✍ ' + book.author : ''}</div>
                `;
                listContainer.appendChild(li);
            });
        }

        function filterBooks() {
            const query = searchInput.value.toLowerCase();
            const filtered = booksData.filter(book => 
                book.title.toLowerCase().includes(query) || 
                (book.author && book.author.toLowerCase().includes(query))
            );
            renderBooks(filtered);
        }

        // 初始化渲染
        renderBooks(booksData);

    </script>
</body>
</html>


