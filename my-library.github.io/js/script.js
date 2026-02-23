// 这里存放您的书籍数据
// 请将此处的示例数据替换为您实际的30本书
const books = [
    { id: 1, title: "JavaScript高级程序设计", author: "尼古拉斯·泽卡斯", category: "编程", file: "books/book-01.html" },
    { id: 2, title: "深入浅出Node.js", author: "朴灵", category: "编程", file: "books/book-02.html" },
    { id: 3, title: "人类简史", author: "尤瓦尔·赫拉利", category: "历史", file: "books/book-03.html" },
    { id: 4, title: "三体", author: "刘慈欣", category: "科幻", file: "books/book-04.html" },
    { id: 5, title: "红楼梦", author: "曹雪芹", category: "文学", file: "books/book-05.html" },
    // ... 添加更多书籍直到30本
    // 格式: { id: 编号, title: "书名", author: "作者", category: "分类", file: "books/您的文件名.html" }
];

// 页面加载完成后渲染书籍
document.addEventListener('DOMContentLoaded', () => {
    renderBooks(books);
});

// 渲染书籍列表的函数
function renderBooks(bookArray) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // 清空

    if (bookArray.length === 0) {
        bookList.innerHTML = '<div id="noResults">没有找到相关书籍。</div>';
        return;
    }

    bookArray.forEach(book => {
        const card = document.createElement('a');
        card.href = book.file; // 跳转到具体的HTML文件
        card.className = 'book-card';
        card.target = "_blank"; // 在新标签页打开
        
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>作者：</strong>${book.author}</p>
            <p><strong>分类：</strong>${book.category}</p>
        `;
        
        bookList.appendChild(card);
    });
}

// 搜索功能
function searchBooks() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(filter) || 
        book.author.toLowerCase().includes(filter)
    );
    renderBooks(filteredBooks);
}