const questionBank = [
    // {
    //     question: 'What is the capital of France?',
    //     choices: ['Madrid', 'Berlin' , 'Paris' , 'Rome' ] ,
    //     answer: 'Paris'
    // } , 
    // {
    //     question: 'Who wrote the play "Romeo and Juliet"?',
    //     choices: ['Charles Dickens', 'William Shakespeare' , 'Jane Austen' , 'Mark Twain' ] ,
    //     answer: 'William Shakespeare'
    // } ,
    // {   
    //     question: 'What is the chemical symbol for the element gold?',
    //     choices: ['Go', 'Gd' , 'Au' , 'Ag' ] ,
    //     answer: 'Au'
    // } ,
    // {   
    //     question: 'Which planet is known as the "Red Planet"?',
    //     choices: ['Mars', 'Venus' , 'Jupiter' , 'Saturn' ] ,
    //     answer: 'Mars'
    // } ,
    // {
    //     question: "What is the largest mammal in the world?",
    //     choices: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    //     answer: "Blue Whale"
    // },
    // {
    //     question: "Which country is known as the Land of the Rising Sun?",
    //     choices: ["China", "Japan", "South Korea", "Thailand"],
    //     answer: "Japan"
    // },
    // {
    //     question: "What is the tallest mountain in the world?",
    //     choices: ["Kilimanjaro", "K2", "Mount Everest", "Matterhorn"],
    //     answer: "Mount Everest"
    // },
    // {
    //     question: "Which gas makes up the majority of Earth's atmosphere?",
    //     choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    //     answer: "Nitrogen"
    // },
    // {
    //     question: "Who is the author of the Harry Potter book series?",
    //     choices: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "C.S. Lewis"],
    //     answer: "J.K. Rowling"
    // },
    // {
    //     question: "Which famous scientist is known for his theory of relativity (E=mc^2)?",
    //     choices: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
    //     answer: "Albert Einstein"
    // },
    {
        question: "Tổng giám đốc CTCK phải đáp ứng tiêu chuẩn" ,
        choices: ["Có chứng chỉ hành nghề môi giới chứng khoán" ,
                  "Có chứng chỉ hành nghề môi giới chứng khoán hoặc phân tích tài chính" , 
                  "Có chứng chỉ hành nghề môi giới chứng khoán hoặc quản lý quỹ" ,
                  "Có chứng chỉ hành nghề phân tích tài chính hoặc quản lý quỹ"
                ] , 
        answer: "Có chứng chỉ hành nghề phân tích tài chính hoặc quản lý quỹ"
    } ,
    {
        question: "Công ty chứng khoán nước ngoài và công ty quản lý quỹ nước ngoài được lập bao nhiêu chi nhánh ở VN" ,
        choices: ["1" , "2", "3" , "4"],
        answer: "1"
    } ,
    {
        question: "Nhà đầu tư nước ngoài là cá nhân và người có liên quan được sở hữu tối đa bao nhiêu % vốn của CTCK, công ty quản lý quỹ đầu tư CK" ,
        choices: ["10%" , "15%" , "49%", "100%"] ,
        answer: "49%"
    }, 
    {
        question: "Phạm vi hoạt động của VP đại diện CTCK, cty quản lý quỹ nước ngoài tại VN KHÔNG bao gồm nội dung nào" ,
        choices: [
            "Thực hiện chức năng văn phòng liên lạc & nghiên cứu thị trường", 
            "Xúc tiến xây dựng các dự án hợp tắc trong lĩnh vực CK & TTCK tại VN" ,
            "Thúc đẩy, giám sát thực hiện dự án do công ty CK, công ty quản lý quỹ nước ngoài tài trợ tại VN", 
            "Thực hiện hoạt động kinh doanh CK tại VN"
        ],
        answer: "Thực hiện hoạt động kinh doanh CK tại VN"
    },
    {
        question: "Chi nhánh CTCK nước ngoài tại VN chỉ được thực hiện nghiệp vụ nào" ,
        choices: [
            "Môi giới chứng khoán" ,
            "Tự doanh chứng khoán" ,
            "Bảo lãnh phát hành CK" ,
            "Tư vấn đầu tư CK"
        ],
        answer: "Tư vấn đầu tư CK"
    } , 
    {
        question: "Một trong những điều kiện để CTCK được chào bán sản phẩm tài chính là" ,
        choices: [
            "Có VĐL và VCSH đạt tối thiếu 100 tỷ VND theo BCTC gần nhất kiểm toán" , 
            "Có VĐL và VCSH đạt tối thiếu 500 tỷ VND theo BCTC gần nhất kiểm toán" ,
            "Có VĐL và VCSH đạt tối thiếu 800 tỷ VND theo BCTC gần nhất kiểm toán" ,
            "Có VĐL và VCSH đạt tối thiếu 1000 tỷ VND theo BCTC gần nhất kiểm toán"
        ],
        answer: "Có VĐL và VCSH đạt tối thiếu 1000 tỷ VND theo BCTC gần nhất kiểm toán"
    } ,
    {
        question: "Một trong những điều kiện để CTCK cung cấp dịch vụ cho vay CK là" ,
        choices: [
            "Tỷ lệ vốn khả dụng đạt 180% liên tục trong 06 tháng gần nhất" , 
            "Tỷ lệ vốn khả dụng đạt 220% liên tục trong 06 tháng gần nhất" ,
            "Tỷ lệ vốn khả dụng đạt 240% liên tục trong 06 tháng gần nhất" ,
            "Tỷ lệ vốn khả dụng đạt 280% liên tục trong 06 tháng gần nhất"
        ],
        answer: "Tỷ lệ vốn khả dụng đạt 220% liên tục trong 06 tháng gần nhất"
    } ,
    {
        question: "Một trong những điều kiện để CTCK cung cấp dịch vụ KH vay tiền mua CK để giao dịch ký quỹ là" ,
        choices: [
            "Tỷ lệ vốn khả dụng đạt 180% liên tục trong 06 tháng gần nhất" , 
            "Tỷ lệ vốn khả dụng đạt 220% liên tục trong 06 tháng gần nhất" ,
            "Tỷ lệ vốn khả dụng đạt 240% liên tục trong 06 tháng gần nhất" ,
            "Tỷ lệ vốn khả dụng đạt 280% liên tục trong 06 tháng gần nhất"
        ] ,
        answer: "Tỷ lệ vốn khả dụng đạt 180% liên tục trong 06 tháng gần nhất"
    },
    {
        question: "Điều kiện, hồ sơ, thủ tục cấp CCHN CK được quy định tại" ,
        choices: [
            "Thông tư số 196/2015/TT-BTC" ,
            "Thông tư số 210/2012/TT-BTC" ,
            "Nghị định số 58/2012/NĐ-CP" ,
            "Nghị định số 155/2020/NĐ-CP"
        ],
        answer: "Nghị định số 155/2020/NĐ-CP"
    } , 
    {
        question: "Tỷ lệ tổng nợ trên VCSH CTCK không được vượt quá",
        choices: [
            "2 lần" , "3 lần", "4 lần", "5 lần"
        ],
        answer: "5 lần"
    },
    {
        question: "Tổng giá trị đầu tư vào TPDN của CTCK không được vượt quá" ,
        choices: [
            "30% VCSH",
            "45% VCSH",
            "50% VCSH",
            "70% VCSH"
        ] ,
        answer: "70% VCSH"
    },
    {
        question: "CTCK không được đầu tư vào cổ phiếu, góp vốn vượt quá" ,
        choices: [
            "30% VCSH",
            "45% VCSH",
            "50% VCSH",
            "70% VCSH"
        ] ,
        answer: "70% VCSH"
    },
    {
        question: "CTCK phải tổ chức họp ĐHCĐ thường niên trong bao lâu kể từ khi kết thúc năm tài chính" ,
        choices: [
            "3 tháng", "4 tháng", "5 tháng", "6 tháng"
        ],
        answer: "6 tháng"
    } ,
    {
        question: "Rủi ro hoạt động của tổ chức kinh doanh chứng khoán được xác định là giá trị lớn nhất của các giá trị sau" ,
        choices: [
            "25% chi phí duy trì hoạt động của tổ chức kinh doanh chứng khoán trong vòng 12 tháng liền kể, 20% VĐL tổi thiểu cho các nghiệp vụ kinh doanh của tổ chức kinh doanh CK theo quy định pháp luật" ,
            "20% chi phí duy trì hoạt động của tổ chức kinh doanh chứng khoán trong vòng 12 tháng liền kể, 25% VĐL tổi thiểu cho các nghiệp vụ kinh doanh của tổ chức kinh doanh CK theo quy định pháp luật" ,
            "25% chi phí duy trì hoạt động của tổ chức kinh doanh chứng khoán trong vòng 12 tháng liền kể, 25% VĐL tổi thiểu cho các nghiệp vụ kinh doanh của tổ chức kinh doanh CK theo quy định pháp luật" ,
            "20% chi phí duy trì hoạt động của tổ chức kinh doanh chứng khoán trong vòng 12 tháng liền kể, 20% VĐL tổi thiểu cho các nghiệp vụ kinh doanh của tổ chức kinh doanh CK theo quy định pháp luật" ,
        ],
        answer: "25% chi phí duy trì hoạt động của tổ chức kinh doanh chứng khoán trong vòng 12 tháng liền kể, 20% VĐL tổi thiểu cho các nghiệp vụ kinh doanh của tổ chức kinh doanh CK theo quy định pháp luật"
    }, 
    {
        question: "Trong trường hợp tỷ lệ vốn khả dụng từ 150% đến dưới 180%, UBCKNN sẽ đưa CTCK vào diện",
        choices: [
            "cảnh báo", "kiểm soát", "kiểm soát đặc biệt", "đình chỉ hoạt động"
        ],
        answer: "cảnh báo"
    }, 
    {
        question: "Trường hợp nào sau đây phải làm thủ tục giảm vốn điều lệ tương ứng với giá trị tính theo mệnh giá được mua lại" ,
        choices: [
            "Mua lại CP của người lao động theo quy chế phát hành cho người lao động", 
            "Mua lại cổ phiếu lẻ theo phương án phát hành cổ phiếu để trả cổ tức, phát hành cổ phiếu từ nguồn VCSH",
            "Mua lại CP theo yêu cầu của cổ đông", 
            "CTCK mua lại cổ phiếu của chính mình để sửa lỗi giao dịch hoặc mua lại CP lô lẻ"
        ],
        answer: "Mua lại CP theo yêu cầu của cổ đông"
    }, 
    {
        question: "Theo Luật CK 2019, Tổng công ty lưu ký và bù trừ CKVN KHÔNG được" ,
        choices: [
            "Quản lý tách biệt tài sản của các quỹ hỗ trợ thanh toán, quỹ bù trừ, quỹ phòng ngừa rủi ro nghiệp vụ", 
            "Chấp thuận, huỷ bỏ tư cách thành viên của Tổng công ty lưu ký và bù trừ CKVN" ,
            "Đảm bảo cơ sở vật chất, kỹ thuật phục vụ các hoạt động đăng ký, lưu ký, bù trừ, thanh toán" , 
            "giám sát hoạt động đăng ký, lưu ký, bù trừ, thanh toán giao dịch chứng khoán"
        ],
        answer: "Chấp thuận, huỷ bỏ tư cách thành viên của Tổng công ty lưu ký và bù trừ CKVN"
    }, 
    {
        question: "Những loạt CK nào sau đây phải được niêm yết, đăng ký giao dịch trên hệ thống giao dịch CK \n I. CK đã chào bán ra công chúng, cổ phiếu của công ty đại chúng II. Chứng chỉ quỹ đóng, chứng chỉ quỹ hoán đổi danh mục \n III. Công cụ nợ của chính phủ, trái phiếu được chính phủ bảo lãnh và trái phiếu chính quyền địa phương  \n IV.Chứng quyền có bảo đảm, hợp đồng tương lai, hợp đồng quyền chọn do UBCKNN chấp thuận" ,
        choices: [ 
            "I, II và III", "I, III và IV", "I, II và IV", "I, II, III và IV"
        ],
        answer: "I, II và IV"
    },
    {
        question: "Chứng khoán bị huỷ đăng ký giao dịch trong các trường hợp sau, ngoại trừ" ,
        choices: [
            "Tổ chức đăng ký giao dịch huỷ tư cách công ty đại chúng theo thông báo của UBCKNN" ,
            "Tổ chức đăng ký giao dịch bị thu hồi giấy đăng ký doanh nghiệp, giấy phép thành lập và hoạt động hoặc giấy tờ pháp lý có giá trị tương đương",
            "Tổ chức đăng ký giao dịch được chấp thuận niêm yết tại sở giao dịch chứng khoán",
            "DN cổ phần hoá sau 2 năm kể từ ngày giao dịch đầu tiên vẫn chưa đáp ứng đủ điều kiện là công ty đại chúng theo quy định tại điểm a khoản 1 điều 32 Luật CK và chưa được UBCKNN xác nhận hoàn tất đăng ký công ty đại chúng"
        ] ,
        answer: 
        "DN cổ phần hoá sau 2 năm kể từ ngày giao dịch đầu tiên vẫn chưa đáp ứng đủ điều kiện là công ty đại chúng theo quy định tại điểm a khoản 1 điều 32 Luật CK và chưa được UBCKNN xác nhận hoàn tất đăng ký công ty đại chúng" , 
    }, 
    {
        question: "Khi chứng khoán đã đăng ký biện pháp bảo đảm bị huỷ đăng ký tập trung theo quy định pháp luật, Tổng công ty lưu ký và bù trừ chứng khoán VN thông báo cho" ,
        choices: [
            "Sở giao dịch chứng khoán nơi chứng khoán dùng làm tài sản bảo đảm niêm yết/ đăng ký giao dịch",
            "Thành viên lưu ký nơi lưu ký chứng khoán dùng làm tài sản đảm bảo để thông báo cho các bên làm thủ tục xoá đăng ký biện pháp bảo đảm",
            "Thành viên lưu ý về việc Tổng công ty lưu ý và bù trừ chứng khoán VN tự động thực hiện xoá biện pháp bảo đảm",
            "Các bên đăng ký biện pháp bao đảm"
        ],
        answer: "Thành viên lưu ký nơi lưu ký chứng khoán dùng làm tài sản đảm bảo để thông báo cho các bên làm thủ tục xoá đăng ký biện pháp bảo đảm"
    },
    {
        question: "Những thông tin nào sau đây về chứng khoán đăng ký biện pháp bảo đảm do Tổng công ty lưu ký và bù trừ chứng khoán cung cấp \n I. Bên bảo đảm và bên nhận bảo đảm \n II. Mã chứng khoán, số lượng CK đăng ký biện pháp bảo đảm \n III. Thông tin về việc xử lý tài sản bảo đảm \n IV. Thời điểm đăng ký biện pháp bảo đảm", 
        choices: [
            "I, II và III" , 'II, III, IV', 'II, III', 'I,II,IV',
        ],
        answer: 'I, II, IV'

    }
]

export default questionBank