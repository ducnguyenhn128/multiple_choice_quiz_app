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
            "Xúc tiến xây dựng các dự án hợp tác trong lĩnh vực CK & TTCK tại VN" ,
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
        question: "Những loạt CK nào sau đây phải được niêm yết, đăng ký giao dịch trên hệ thống giao dịch CK \nI. CK đã chào bán ra công chúng, cổ phiếu của công ty đại chúng \nII. Chứng chỉ quỹ đóng, chứng chỉ quỹ hoán đổi danh mục \nIII. Công cụ nợ của chính phủ, trái phiếu được chính phủ bảo lãnh và trái phiếu chính quyền địa phương  \nIV. Chứng quyền có bảo đảm, hợp đồng tương lai, hợp đồng quyền chọn do UBCKNN chấp thuận" ,
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
            "I, II và III" , 'II, III, IV', 'II, III', 'I, II, IV',
        ],
        answer: 'I, II, IV'

    },
    {
        question: "Người sở hữu CK đã lưu ký nhận quyền, lợi ích được phân bổ thông qua" ,
        choices: [
            "Sở giao dịch CK", "Tổ chức phát hành, công ty đại chúng", 
            "Tổng công ty lưu ký và bù trừ CKVN & các thành viên lưu ký nơi người sử hữu CK mở tài khoản lưu ký CK " ,
            "Tổng công ty lưu ký và bù trừ CKVN"
        ],
        answer: "Tổng công ty lưu ký và bù trừ CKVN & các thành viên lưu ký nơi người sử hữu CK mở tài khoản lưu ký CK "
    },
    {
        question: "Câu nào sau đây miêu tả đầy đủ, chính xác về nguyên tắc lưu ký chứng khoán",
        choices: [
            "Khách hàng lưu ký CK tại thành viên lưu ký", 
            "Khách hàng lưu ký CK tại thành viên lưu ký & thành viên tái lưu ký CK của KH tại Tổng công ty lưu ký CK VN" , 
            "Khách hàng lưu ký trực tiếp tại Tổng công ty lưu ký CK VN", 
            "Khách hàng lưu ký CK qua công ty phát hành"
        ],
        answer: "Khách hàng lưu ký CK tại thành viên lưu ký & thành viên tái lưu ký CK của KH tại Tổng công ty lưu ký CK VN"
    }, 
    {
        question: "Thành viên lưu ký là CTCK đã chấm dứt tư cách thành viên tại sở giao dịch CKVN được phép",
        choices: [
            "Mở tài khoản lưu ký CK tại 1 ngân hàng duy nhất khác để tất toán các tài khoản lưu ký cho CK của khách hàng", 
            "Mở tài khoản lưu ký CK tại 1 công ty CK khác để giao dịch chứng khoán của chính mình", 
            "Mở tài khoản lưu ký CK tại các thành viên lưu ký khác để xử lý số chứng khoán còn lại trên tài khoản tự doanh",
            "Mở tài khoản giao dịch CK tại các CTCK khác để xử lý số chứng khoán còn lại trên tài khoản tự doanh"
        ],
        answer: "Mở tài khoản lưu ký CK tại các thành viên lưu ký khác để xử lý số chứng khoán còn lại trên tài khoản tự doanh"
    },
    {
        question: "Miêu tả nào sau đây chính xác nhất về giao dịch bán khống tài sản có đảm bảo", 
        choices: [
            "giao dịch bán khống tài sản có đảm bảo là giao dịch bán CK mà NĐT đã mua trên hệ thống GDCK tại các ngày giao dịch trước đó và đang trong quá trình hoàn tất chuyển quyền sở hữu",
            "giao dịch bán khống tài sản có đảm bảo là giao dịch bán CK đã được vay trên hệ thống vay và cho vay CK của Tổng công ty lưu ký và bù trừ CKVN. Người bán sau đó có nghĩa vụ mua lại số CK đã để hoàn trả khoản đã vay",
            "giao dịch bán khống tài sản có đảm bảo là giao dịch bán CK khi NĐT không sở hữu CK đó và sử dụng các tài sản hiện có để làm tài sản đảm bảo", 
            "giao dịch bán khống tài sản có đảm bảo là giao dịch bán CK khi NĐT không sở hữu CK tại thời điểm bán nhưng tại ngày thanh toán đã có đủ số chứng khoán để chuyển giao cho bên mua dựa trên hợp đồng thoả thuận với bên mua"
        ],
        answer: "giao dịch bán khống tài sản có đảm bảo là giao dịch bán CK đã được vay trên hệ thống vay và cho vay CK của Tổng công ty lưu ký và bù trừ CKVN. Người bán sau đó có nghĩa vụ mua lại số CK đã để hoàn trả khoản đã vay"
    }, 
    {
        question: "Chi nhánh công ty quản lý quỹ nước ngoài tại VN được mở", 
        choices: [
            "01 tài khoản lưu ký chứng khoán duy nhất tại 1 thành viên lưu ký duy nhất", 
            "02 tài khoản lưu ký chứng khoán trong đó 01 tài khoản lưu ký CK tại ngân hàng lưu ký và 01 tài khoản tại CTCK",
            "02 tài khoản lưu ký chứng khoán tại thành viên lưu ký trong đó 01 tài khoản lưu ký cho chính mình và 01 tài khoản lưu ký CK để quản lý danh mục CK cho NĐT nước ngoài", 
            "02 tài khoản lưu ký chứng khoán tại 01 thành viên duy nhất"
        ],
        answer: "02 tài khoản lưu ký chứng khoán tại thành viên lưu ký trong đó 01 tài khoản lưu ký cho chính mình và 01 tài khoản lưu ký CK để quản lý danh mục CK cho NĐT nước ngoài"
    },
    {
        question: "Tài khoản ký quỹ bù trừ của NĐT không được sử dụng cho hoạt động nào",
        choices: [
            "Nhận và hoàn trả tài sản ký quỹ cho thành viên bù trừ", 
            "Nhận hoặc thanh toán tiền giao dịch CK của NĐT, nhận thanh toán lãi tiền gửi ngân hàng theo mức lãi suất thoả thuận giữa thành viên bù trừ và ngân hàng quản lý tài khoản", 
            "Nhận hoặc chuyển giao chứng khoán vào ngày thanh toán",
            "Nhận quyền lợi và lợi ích phát sinh đối với CK trên tài khoản ký quỹ bù trừ"
        ],
        answer: "Nhận và hoàn trả tài sản ký quỹ cho thành viên bù trừ"
    }, 
    {
        question: "Chứng khoán được Tổng công ty lưu ký bù trừ CKVN chấp thuận là tài sản ký quỹ bù trừ cho các giao dịch chứng khoán cơ sở phải đáp ứng điều kiện nào", 
        choices: [
            "Thuộc nhóm VN30" , 
            "Là CK đang được sử dụng làm tài sản đảm bảo trong các giao dịch theo quy định pháp luật dân sự về giao dịch tài sản bảo đảm", 
            "Không bị phong toả, tạm giữ tại Tổng công ty lưu ký bù trừ CKVN",
            "Là CK có thanh khoản cao, giao dịch lớn"
        ],
        answer: "Không bị phong toả, tạm giữ tại Tổng công ty lưu ký bù trừ CKVN"
    },
    {
        question: "Trường hợp thiếu CK do sửa lỗi giao dịch hoặc xử lý lỗi tự doanh, thành viên bù trừ được áp dụng các biện pháp hỗ trợ sau, ngoại trừ",
        choices: [
            "Sử dụng CK vay qua hệ thống vay và cho vay do Tổng công ty lưu ký bù trừ CKVN quản lý", 
            "Trường hợp đến thời điểm thanh toán theo quy định, thành viên bù trừ vẫn không đủ CK để thanh toán, Tổng công ty lưu ký bù trừ CKVN sẽ thực hiện huỷ thanh toán đối với số CK thiếu cuả thành viên bù trừ",
            "Mua bắt buộc qua hệ thống giao dịch CK", 
            "Thanh toán bằng tiền nếu CK thiếu không được vay và mua bắt buộc theo quy định của Tổng công ty lưu ký bù trừ CKVN và Sở GDCKVN", 
        ],
        answer: "Trường hợp đến thời điểm thanh toán theo quy định, thành viên bù trừ vẫn không đủ CK để thanh toán, Tổng công ty lưu ký bù trừ CKVN sẽ thực hiện huỷ thanh toán đối với số CK thiếu cuả thành viên bù trừ"
    },
    {
        question: "Hệ thống vay và cho vay CK được thực hiện theo nguyên tắc nào",
        choices: 
        [
            "Hệ thống vay và cho vay CK được thực hiện theo cơ chế khớp lệnh giữa bên vay và bên cho vay trên nguyên tắc ưu tiên về thời gian",
            "Tài sản bảo đảm bắt buộc là chứng khoán niêm yết trên Sở giao dịch CK",
            "Lãi suất cho vay được thoả thuận trên nguyên tắc tuân thủ pháp luật",
            "Khoản vay phải được hoàn trả duy nhất bằng tiền sau khi được bên cho vay chấp thuận"
        ],
        answer: "Lãi suất cho vay được thoả thuận trên nguyên tắc tuân thủ pháp luật"
    },
    // 31 - 90
    {
        question: 'Công ty đại chúng được mua lại CP của chính mình không phải đáp ứng quy định nào \nI. Mua lại không quá 30% tổng số cổ phần phổ thông đã bán \nII. Phải thực hiện mua lại CP trong thời hạn 6 tháng, kể từ ngày kết thúc đợt chào bán cổ phiếu để tăng vốn \nIII. Có quyết định mua lại CP để giảm vốn điều lệ được DHCD thông qua\nIV. Có CTCK được chỉ định thực hiện giao dịch',
        choices: [
            'I, IV', 'II', 'II,IV', 'Tất cả các phương án trên'
        ],
        answer: 'II'
    },
    {
        question:'Các hình thức xử phạt trong xử lý vi phạm hành chính trong lĩnh vực CK bao gồm \nI. Cảnh cáo \nII. Tước quyền sử dụng GCN đăng ký hoạt động văn phòng dại diện, chứng chỉ hành nghề CK từ 03 - 24 tháng \nIII. Tịch thu tang vật vi phạm hành chính, phương tiện được sử dụng để vi phạm hành chính \nIV. Đình chỉ giao dịch chứng khoán có thời hạn từ 01 - 12 tháng',
        choices: [
            'I',
            'I, II',
            'I, II, IV',
            'Tất cả các phương án trên'
        ],
        answer: 'I, II, IV'
    }, 
    {
        question: 'Điều kiện nào sau đây là điều kiện niêm yết trái phiếu trên Sở GDCK \nI. Có VĐL đã góp từ 10 tỷ trở lên \nII. Được HĐQT thông qua việc niêm yết \nIII. ROE năm liền trước năm đăng ký tối thiếu 15% \nIV. Phải là trái phiếu đã chào bán ra công chúng',
        choices: [
            'I, II', 'III, IV', 'I, II, III', 'IV'
        ],
        answer: 'IV'
    }, 
    {
        question: 'Điều kiện về vốn, vốn chủ sở hữu đối với công ty chứng khoán thực hiện tự doanh chứng khoán phái sinh tối thiếu là',
        choices: [
            '500 tỷ',
            '600 tỷ',
            '800 tỷ',
            '900 tỷ'
        ],
        answer: '600 tỷ'
    }, 
    {
        question: 'Điều kiện là thành viên bù trừ chung cho hoạt động thanh toán, bù trừ giao dịch chứng khoán phái sinh của CTCK \nI. Là thành viên lưu ký của Tổng công ty lưu ký bù trừ chứng khoán VN \nII. Vốn điều lệ, VCSH từ 1200 tỷ VND \nIII. Vốn điều lệ, VCSH từ 5000 tỷ VND \nIV. Không lỗ 2 năm gần nhất',
        choices: [
            'I, II, IV', 'II, IV', 'I, III, IV', 'Tất cả các phương án trên'
        ],
        answer: 'I, II, IV'
    },
    {
        question: 'Theo quy định của Luật Chứng khoán, Sở giao dịch CK không có quyền nào sau đây, loại trừ \n I. Ban hành quy chế đăng ký, lưu ký, bù trừ, thanh toán CK sau khi được UBCK chấp thuận \nII. Tạm ngừng đình chỉ hoặc huỷ bỏ giao dịch chứng khoán \nIII. Chấp thuận, huỷ bỏ niêm yết CK tại SGDCK \nIV. Làm trung gian hoà giải theo yêu cầu của thành viên giao dịch khi phát sinh tranh chấp liên quan đến giao dịch CK',
        choices: [
            'I', 'I, IV', 'II, III', 'III, IV'
        ],
        answer: 'I'
    },
    {
        question: 'Khi xử lý vi phạm hành chính trong lĩnh vực CK, Chủ tich UBCK được phạt tối đa',
        choices: [
            'Đến 100 triệu với tổ chức, 50 triệu với cá nhân',
            'Đến 500 triệu với tổ chức, 250 triệu với cá nhân',
            'Đến 2 tỷ với tổ chức, 1 tỷ với cá nhân',
            'Đến 3 tỷ với tổ chức, 1.5 tỷ với cá nhân'
        ],
        answer: 'Đến 3 tỷ với tổ chức, 1.5 tỷ với cá nhân'
    },
    {
        question: 'Đối tượng nào được phạt vi phạm hành chính trong lĩnh vực CK \nI. Bộ trưởng Bộ tài chính \nII. Chủ tịch UBCK \nIII. Chánh thanh tra UBCK \nIV. Chủ tịch UBND cấp tỉnh',
        choices: [
            'I, II, III', 'II, III', 'II, III, IV', 'Tất cả các phương án trên'
        ],
        answer: 'II, III, IV'
    }, 
    {
        question: 'Tổ chức niêm yết không phải công bố thông tin trong 24 giờ kể từ khi xảy ra sự kiện nào' ,
        choices: [
            'có quyết định mua lại CP của chính mình', 
            'có quyểt định thay đổi DN kiểm toán', 
            'có quyết định của cơ quan thuế v/v vi phạm luật thuế',
            'khi giá cổ phiếu tăng trần hoặc giảm sàn 10 phiên liên tiếp'
        ],
        answer: 'khi giá cổ phiếu tăng trần hoặc giảm sàn 10 phiên liên tiếp'
    },
    {
        question: 'Tổ chức niêm yết CP, công ty đại chúng quy mô lớn phải công bố thông tin bất thường trong vòng 24h, kể từ khi vay có giá trị bao nhiêu % tổng tài sản của công ty',
        choices: [
            '10%', '20%', '25%', '30%'
        ],
        answer: '10%'
    }, 
    {
        question: 'Sở giao dịch CK VN được chấp thuận các đối tượng nào trở thành thành viên \nI. Công ty CK \nII. Ngân hàng thương mại \nIII. Chi nhánh ngân hàng nước ngoài \nIV. Công ty đại chúng',
        choices: [
            'I', 'I, II', 'I, II, III', 'Tất cả các phương án trên'
        ],
        answer: 'I, II, III'
    }, 
    {
        question: 'Loại trái phiếu DN nào được niêm yết trên Sở giao dịch CK VN theo nghị định 155/2020/NĐ-CP \nI. Trái phiếu đã chào bán ra công chúng \nII. Trái phiếu chào bán riêng lẻ \nIII.Trái phiếu chào bán riêng lẻ và chào bán ra công chúng của công ty đại chúng \nIV. Trái phiếu chào bán riêng lẻ và chào bán ra công chúng của tất cả các doanh nghiệp đáp ứng điều kiện về vốn, khả năng tài chính',
        choices: [
            'I', 'I, II', 'I, II, III', 'Tất cả các phương án trên'
        ], 
        answer: 'I'
    },
    {
        question: 'Tổ chức, cá nhân nào có nghĩa vụ đăng ký mã số giao dịch trên TTCK \nI. NĐT nước ngoài \nII. Tổ chức phát hành chứng chỉ lưu ký tại nước ngoài \nIII. Tổ chức kinh tế có NĐT nước ngoài nắm trên 50% cổ phần \nIV. Tất cả NĐT tham gia TTCK',
        choices: [
            'I', 'I, II', 'I, II, III', 'IV' 
        ],
        answer: 'I, II, III'
    }, 
    {
        question: 'Tổ chức, cá nhân đã được cấp mã số giao dịch CK phải báo cáo Tổng công ty lưu ký bù trừ CKCN v/v thay đổi thông tin liên quan đến mã số giao dịch CK trong các trường hợp nào \nI. Thay đổi thành viên lưu ký \nII. Thay đổi tên, quốc gia hoặc vùng lãnh thổ nơi đăng ký hoạt động, địa chỉ trụ sở chính, số giấy phép đăng ký kinh doanh đối với tổ chức \nIII. Thay đổi tên, quốc tịch, địa chỉ liên lạc, số hộ chiếu hoặc chứng thực cá nhân hợp pháp khác đối với cá nhân \nIV. Thay đổi số lượng CK nắm giữ',
        choices: [
            'I', 'II, III', 'I, II, III', 'Tất cả các phương án trên'
        ],
        answer: 'I, II, III'
    }, 
    {
        question: 'Đâu là điều kiện để trở thành thành viên bù trừ chung trên TTCK cơ sở',
        choices: [
            'có VĐL, VSCH tổi thiểu 1000 tỷ VND (đối với NHTM, chi nhánh NH nước ngoài) hoặc tối thiểu 250 tỷ VNĐ (đói với CTCK',
            'có VĐL, VSCH tổi thiểu 3000 tỷ VND (đối với NHTM, chi nhánh NH nước ngoài) hoặc tối thiểu 500 tỷ VNĐ (đói với CTCK',
            'có VĐL, VSCH tổi thiểu 7000 tỷ VND (đối với NHTM, chi nhánh NH nước ngoài) hoặc tối thiểu 900 tỷ VNĐ (đói với CTCK',
            'có VĐL, VSCH tổi thiểu 10,000 tỷ VND (đối với NHTM, chi nhánh NH nước ngoài) hoặc tối thiểu 1200 tỷ VNĐ (đói với CTCK'
        ],
        answer: 'có VĐL, VSCH tổi thiểu 7000 tỷ VND (đối với NHTM, chi nhánh NH nước ngoài) hoặc tối thiểu 900 tỷ VNĐ (đói với CTCK'
    },
    {
        question: 'Ngân hàng thanh toán có thể là tổ chức nào dưới đây, ngoại trừ',
        choices: [
            'Chi nhánh ngân hàng nước ngoài tại VN',
            'Ngân hàng thương mại',
            'Ngân hàng nhà nước VN',
            'Không có đáp án'
        ],
        answer: 'Chi nhánh ngân hàng nước ngoài tại VN'
    },
    {
        question: 'Theo quy định pháp luật VN, DN nào được chào bán cổ phiếu, ngoại trừ \nI. Công ty cổ phần \nII. Công ty TNHH chuyển thành công ty cổ phần \nIII. Doanh nghiệp nhà nước cổ phần hoá \nIV. Công ty hợp danh \nV. Doanh nghiệp tư nhân' ,
        choices: [
            'I, II',
            'I, II, III',
            'IV, V',
            'I, II, IV'
        ],
        answer: 'IV, V'
    }, 
    {
        question: 'Khẳng định nào sau đây không chính xác về NHTM \nI. NHTM là thành viên giao dịch đặc biệt khi được sở giao dịch CKVN chấp thuận \nII. NHTM là NĐTCK chuyên nghiệp khi có năng lực tài chính và được mua chứng khoán theo quy định của pháp luật \nIII. Các NHTM là thành viên lưu ký, thành viên bù trừ khi được UBCL cấp GCN đăng ký hoạt động lưu ký CK và được Tổng công ty lưu ký bù trừ CKVN chấp thuận \nIV. Các NHTM đều được thực hiện cung cấp dịch vụ thanh toán tiền cho các giao dịch CK trên hệ thống giao dịch CK',
        choices: [
            'I, II', 'II', 'II, IV', 'IV'
        ],
        answer: 'IV'
    },
    {
        question: 'Theo quy định pháp luật, tỷ lệ sở hữu nước ngoài được xác định là tổng tỷ lệ sở hữu cổ phần, phần vốn góp tính trên VĐL là',
        choices: [
            'Tất cả NĐT nước ngoài và tổ chức kinh tế có NĐT nước ngoài nắm giữ từ 51% VĐL trở lên trong một công ty đại chúng, tổ chức kinh doanh CK hoặc quỹ đầu tư CK',
            'Tất cả các tổ chức thành lập theo pháp luật nước ngoài thực hiện đầu tư kinh doanh tại VN',
            'Tất cả NĐT nước ngoài và tổ chức kinh tế có NĐT nước ngoài nắm giữ từ 50% VĐL trở lên trong một công ty đại chúng, tổ chức kinh doanh chứng khoán hoặc quỹ đầu tư CK',
            'Tất cả nhà đầu tư nước ngoài, tổ chức kinh tế có vốn đầu tư nước ngoài'
        ],
        answer: 'Tất cả NĐT nước ngoài và tổ chức kinh tế có NĐT nước ngoài nắm giữ từ 50% VĐL trở lên trong một công ty đại chúng, tổ chức kinh doanh chứng khoán hoặc quỹ đầu tư CK',
    },
    {
        question: 'Tỷ lệ sở hữu nước ngoài đối với cổ phiếu của công ty đại chúng theo pháp luật là \nI. 49% \nII. Không hạn chế, trừ trường hợp điều ước quốc tế mà VN là thành viên, pháp luật về đầu tư quy định tỷ lệ sở hữu nước ngoài \nIII. 50% VĐL trong trường hợp công ty đại chúng hoạt động trong ngành nghề đầu tư kinh doanh có điều kiện áp dụng với NĐT nước ngoài mà chưa có quy định cụ thể về sở hữu nước ngoài',
        choices: [
            'I', 'I, II', 'II, III', 'Tất cả các phương án trên'
        ],
        answer: 'II, III'
    },
    {
        question: 'Nguyên tắc hoạt động về chứng khoán và TTCK nào không đúng',
        choices: [
            'bảo về quyền lợi và lợi ích hợp pháp của NĐT',
            'công bằng, công khai, minh bạch',
            'chính phủ thống nhất quản lý nhà nước về CK và TTCK',
            'tôn trọng quyền sở hữu tài sản trong hoạt động CK và TTCK'
        ],
        answer: 'chính phủ thống nhất quản lý nhà nước về CK và TTCK'
    },
    {
        question: 'Khẳng định nào sau đây đúng nhất về người hành nghề chứng khoán \nI. Người làm việc tại CTCK, công ty quản lý quỹ đầu tư CK, chi nhánh công ty CK nước ngoài tại VN, chi nhánh công ty quản lý quỹ nước ngoài tại VN, công ty đầu tư CK \nII. Người làm việc cho công ty đầu tư CK và được UBCK cấp chứng chỉ hành nghề chứng khoán \nIII. Người được UBCK cấp chứng chỉ hành nghề CK',
        choices: [
            'I, III', 'I, II', 'II', 'III'
        ],
        answer: 'II'
    },
    {
        question: 'Đối tượng nào dưới đây không phải người nội bộ theo pháp luật',
        choices: [
            'thư ký công ty',
            'người phụ trách quản trị công ty',
            'người được uỷ quyền công bố thông tin',
            'tổ chức cá nhân sở hữu trên 10% cổ phần có quyền biểu quyết DN'
        ],
        answer: 'tổ chức cá nhân sở hữu trên 10% cổ phần có quyền biểu quyết DN'
    },
    {
        question: 'Tổ chức nào không được cấp phép nghiệp vụ tư vấn chứng khoán',
        choices: [
            'Công ty chứng khoán', 'Chi nhánh công ty CK nước ngoài tại VN', 'Công ty quản lý quỹ đầu tư CK', 'Chi nhánh công ty quản lý quỹ đầu tư nước ngoài tại VN'
        ],
        answer: 'Chi nhánh công ty quản lý quỹ đầu tư nước ngoài tại VN'
    }, 
    {
        question: 'Khẳng định nào sau đây là đúng với công ty đại chúng \nI. Công ty cổ phần có VĐL đã góp từ 30 tỷ trở lên, có tối thiếu 10% số cổ phiếu có quyèn biểu quyết do ít nhất 10 NĐT chuyên nghiệp không phải là cổ đông lớn nắm giữ \nII. Công ty đã thực hiện chào bán thành công cổ phiếu lần đầu ra công chúng \nIII. Công ty có VĐL đã góp từ 50 tỷ trở lên',
        choices: [
            'I', 'II', 'I, II', 'III'
        ],
        answer: 'II'
    }, 
    {
        question: 'Tỷ lệ sở hữu nước ngoài đối với cổ phiếu của công ty chứng khoán, công ty quản lý quỹ đầu tư chứng khoán theo pháp luật Việt Nam là \nI. Không hạn chế với NĐT nước ngoài là tổ chức \nII. 50% \nIII. 49% \nIV. 49% đối với NĐT nước ngoài là cá nhân',
        choices: [
            'I',
            'I, II',
            'III',
            'I, IV'
        ],
        answer: 'I, IV'
    }, 
    {
        question: 'Khẳng định nào sau đây không đúng về phạm vi hoạt động của văn phòng đại diện công ty chứng khoán, công ty quản lý quỹ nước ngoài tại việt nam \nI. Xúc tiến xây dựng các dự án hợp tác trong lĩnh vực chứng khoán và thị trường chứng khoán tại việt nam \nII. Tư vấn khách hàng đầu tư chứng khoán \nIII. Thực hiện các hợp đồng thỏa thuận đã ký kết giữa công ty chứng khoán, công ty quản lý quỹ nước ngoài với các tổ chức kinh tế tại việt nam \nIV. Giám sát thực hiện các dự án do công ty chứng khoán, công ty quản lý quỹ nước ngoài tài trợ tại Việt Nam ',
        choices: [
            'I, II', 'II, III', 'II, IV', 'III, IV'
        ],
        answer: 'II, IV'
    },
    {
        question: 'Nghĩa vụ nào không phải nghĩa vụ của công ty chứng khoán, chi nhánh công ty chứng khoán nước ngoài tại Việt Nam',
        choices: [
            'thực hiện quản lý tách biệt tài sản của từng khách hàng', 
            'bảo đảm tối thiểu 03 nhân viên làm việc tại bộ phận nghiệp vụ phải có chứng chỉ hành nghề phù hợp với nghiệp vụ thực hiện',
            'Ký hợp đồng bằng văn bản với khách hàng khi thực hiện dịch vụ cho khách hàng',
            'Thu thập thông tin về tình hình tài chính, khả năng chấp nhận rủi ro của khách hàng'
        ],
        answer: 'bảo đảm tối thiểu 03 nhân viên làm việc tại bộ phận nghiệp vụ phải có chứng chỉ hành nghề phù hợp với nghiệp vụ thực hiện'
    },
    {
        question: 'Người hành nghề chứng khoán không được thực hiện các hành vi sau đây, ngoại trừ ',
        choices: [
            'Mở, quản lý tài khoản giao dịch chứng khoán tại công ty chứng khoán nơi minh đang làm việc và phải duy trì tài khoản giao dịch chứng khoán tại công ty chứng khoản khác đã mở trước đó',
            'Đồng thời làm việc cho công ty chứng khoán và chi nhánh công ty quản lý quỹ nước ngoài tại việt nam',
            'thực hiện hành vi vượt quá phạm vi ủy quyền của công ty chứng khoán, công ty quản lý quỹ đầu tư chứng khoán, nơi mình dùng làm việc',
            'Không có phương án nào đúng'
        ],
        answer: 'Không có phương án nào đúng'
    },
    {
        question: 'Tổ chức nào dưới dây là đối tượng được xem xét chấp thuận cung cấp dịch vụ bù trừ, thanh toán giao dịch chứng khoán \nI. Công ty chứng khoán \nII. Chi nhánh công ty chứng khoán nước ngoài tại việt nam \nIII. Ngân hàng thương mại \nIV. Chi nhánh ngân hàng nước ngoài tại việt nam',
        choices: [
            'I,III', 'I, II', 'I, III, IV', 'Tất cả các phương án trên'
        ],
        answer: 'I, III, IV'
    },

    {
        question: 'Hạn chế đối với công ty chứng khoán, công ty quản lý quỹ đầu tư chứng khoán bao gồm \nI. Công ty chứng khoán được góp vốn thành lập, mua cổ phần, phần vốn góp để sở hữu hoặc cùng với người có liên quan (nếu có) sở hữu không quá 5% số cổ phiếu có quyền biểu quyết đang lưu hành của 1 công ty chứng khoán khác tại việt nam \nII. Công ty quản lý quỹ được góp vốn thành lập, mua cổ phần, phần vốn góp của 01 công ty quản lý quỹ để thực hiện hợp nhất, sát nhập  \nIII. Không được đưa ra nhận định hoặc đảm bảo với khách hàng về mức thu nhập hoặc lợi nhuận đạt được trên khoản đầu tư của mình hoặc đảm bao khách hàng không bị thua lỗ, trừ trường hợp đầu tư vào chứng khoán có thu nhập cố định \nIV. cổ đông sáng lập, thành viên góp vốn khi thành lập của công ty chứng khoán, công ty quản lý quỹ không được chuyển nhượng cổ phần hoặc phần vốn góp của mình trong thời hạn 05 năm kể từ ngày được cấp giấy phép, trừ trường hợp chuyển nhượng giữa các cổ đông sáng lập, thành viên góp vốn khi thành lập công ty',
        choices: [
            'I, II', 'II, III', 'III, IV', "Tất cả các phương án trên"
        ],
        answer: 'III, IV'
    },
    {
        question: 'Một doanh nghiệp có kinh doanh dịch vụ đòi nợ với mức vốn điều lệ là 10 tỷ đồng. Năm 2020, đặt mục tiêu trở thành công ty đại chúng theo luật chứng khoán năm 2019 thì doanh nghiệp phải thực hiện công việc nào trước tiên',
        choices: [
            'tăng vốn điều lệ lên 30 tỷ đồng',
            'Tăng số lượng cố đông lên trên 100 người không kể cổ đông lớn',
            'chào bán cổ phiếu ra công chúng',
            'hoàn thành thành quyết toán các vấn đề liên quan đến dịch vụ đòi nợ này trước 01/01/2021'
        ],
        answer: 'hoàn thành thành quyết toán các vấn đề liên quan đến dịch vụ đòi nợ này trước 01/01/2021'
    },
    {
        question: 'Với tư cách là nhân viên một công ty chứng khoán, được khách hàng là ngân hàng thương mại có cổ phiếu trên sở giao dịch chứng khoán, yêu cầu tư vấn về việc bầu thành viên HĐQT tại đại hội đồng cổ đông thường niên sắp tới, bạn sẽ tư vấn liên quan đến số lượng thành viên HĐQT như thế nào',
        choices: [
            'Số lượng thành viên HĐQT ủy thuộc vào quyết định của đa số cổ đông tham dự cuộc họp đại hội đồng cổ đông',
            'Số lượng thành viên HĐQT tùy thuộc vào kết quả bầu lại cuộc họp đại hội đồng cổ đông',
            'Số lượng thành viên HĐQT ít nhất là 3 người và nhiều nhất là 11 người',
            'Số lượng thành viên HĐQT không ít hơn 5 người và nhiều nhất 11 người'
        ],
        answer: 'Số lượng thành viên HĐQT không ít hơn 5 người và nhiều nhất 11 người'
    },
    {
        question: ' Với tư cách là nhân viên một công ty chứng khoán, được khách hàng là ngân hàng thương mại đồng thời là công ty đại chúng yêu cầu tư vấn về việc bầu thành viên HĐQT tại đại hội đồng cổ đông thường niên sắp tới hạn sẽ tư vẫn liên quan đến số lượng thành viên HĐQT như thế nào?',
        choices: [
            'cơ cấu thành viên HĐQT phải đảm bảo tối thiểu 17 tổng số thành viên HĐQT là thành viên độc lập',
            'cơ cấu thành viên HĐQT phải đảm bảo có tối thiểu 01 thành viên độc lập nếu HĐQT có từ 03 đến 05 thành viên hoặc tối thiểu 02 thành viên cộc lập nếu HĐQT có từ 6 đến 8 thành viên hoặc tối thiểu 03 thành viên độc lập nếu HĐQT có từ 6 đến 11 thành viên',
            'cơ cấu thành viên HĐQT phải có ít nhất 01 thành viên độc lập',
            'cơ cấu thành viên HĐQT phải dảm bảo tối thiểu 1/5 tổng số thành viên HĐQT là thành viên độc lập'
        ],
        answer: 'cơ cấu thành viên HĐQT phải có ít nhất 01 thành viên độc lập'
    },
    {
        question: 'Trong trường hợp nào dưới đây, hợp đồng mở tài khoản giao dịch chứng khoán giữa CTCK và KH có thể yêu cầu Toà án tuyên vô hiệu',
        choices: [
            'hợp đồng mở tài khoản giao dịch chứng khoán có thoả thuận nhằm trốn tránh nghĩa vụ pháp lý của CTCK nhưng có lý do chính đáng',
            'hợp đồng mở tài khoản giao dịch chứng khoán có thoả thuận buộc KH có nghĩa vụ bồi thường một cách không công bằng nhưng có lý do chính đáng',
            'hợp đồng mở tài khoản giao dịch chứng khoán có thoả thuận hạn chế phạm vi bồi thường của CTCK nhưng có lý do chính đáng',
            'Khách hàng chưa điền đủ thông tin trên hợp đồng mở tài khoản giao dịch CK'
        ],
        answer: 'hợp đồng mở tài khoản giao dịch chứng khoán có thoả thuận buộc KH có nghĩa vụ bồi thường một cách không công bằng nhưng có lý do chính đáng'
    },

    {
        question: 'Với tình hình diễn biến khó lường của dịch covid19, cuộc họp DHCD thường niên năm 2021 của nhiều công ty đại chúng có thể không đảm bảo tổ chức trong thời hạn 04 tháng kể từ ngày kết thúc năm tài chính. Việc gia hạn được thực hiện như nào',
        choices: [
            'HĐQT đề nghị đại hội đồng cổ đông quyết định gia hạn',
            'HĐQT tự quyết định việc gia hạn',
            'HĐQT đề nghị cơ quan đăng ký kinh doanh gia hạn',
            'HĐQT đề nghị UBCKNN gia hạn'
        ],
        answer: 'HĐQT tự quyết định việc gia hạn'
    },
    {
        question: 'Một cổ đông muốn uỷ quyền cho một cá nhân khác đại diện dự họp ĐHCĐ của một công ty niêm yết thì làm như nào', 
        choices:[
            'lập văn bản thông báo cho công ty niêm yết v/v uỷ quyền trước khi diễn ra cuộc họp',
            'lập văn bản uỷ quyền theo mẫu do công ty niêm yết phát hành',
            'lập văn bản uỷ quyền nêu rõ tên cá nhân được uỷ quyền và số lượng cổ phần được uỷ quyền',
            'lập văn bản uỷ quyền theo quy định pháp luật về dân sự và nêu rõ tên cá nhân được uỷ quyền, số lượng cổ phần uỷ quyền'
        ],
        answer: 'lập văn bản uỷ quyền theo quy định pháp luật về dân sự và nêu rõ tên cá nhân được uỷ quyền, số lượng cổ phần uỷ quyền'
    }, 
    {
        question: 'Trường hợp chủ toạ, thư ký từ chối ký biên bản họp ĐHCD thì biên bản nào có hiệu lực pháp luật hay không',
        choices: [
            'Biên bản có hiệu lực nếu ghi rõ việc chủ toạ, thư ký từ chối ký biên bản',
            'Biên bản có hiệu lực nếu có đầy đủ nội dung theo quy định tại điểm a,b,c,d,đ,e,g,h Khoản 1 , điều 50 luật DN',
            'Biên bản có hiệu lực nếu tất cả thành viên HĐQT tham gia dự họp ký',
            'Biên bản có hiệu lực nếu đáp ứng các yếu tố a,b,c trên'
        ],
        answer: 'Biên bản có hiệu lực nếu đáp ứng các yếu tố a,b,c trên'
    },
    {
        question: 'Một DN niêm yết trên SGDCK muốn thay đổi mẫu dấu do vừa thay đổi tên DN, theo đó DN phải thực hiện thủ tục nào',
        choices: [
            'đề nghị cơ quan công an cấp mẫu dấu mới',
            'tự quyết định mẫu dấu và phải thông báo với cơ quan đăng ký kinh doanh trước khi sử dụng',
            'tự quyết định mẫu dấu và phải đăng ký với cơ quan đăng ký kinh doanh trước khi sử dụng',
            'tự quyết định mẫu dấu và thực hiện công bố thông tin theo quy định pháp luật CK'
        ],
        answer: 'tự quyết định mẫu dấu và thực hiện công bố thông tin theo quy định pháp luật CK'
    },
    {
        question: 'Loại hình DN nào sau đây được tham gia mua, bán cổ phiếu trên TTCK \nI. Công ty cổ phần \nII. Công ty TNHH \nIII. Công ty hợp danh \nIV. Doanh nghiệp tư nhân',
        choices: [
            'Chi công ty cổ phần là loại hình duy nhất có quyền phát hành cổ phiếu',
            'Công ty cổ phần và công ty TNHH do công ty TNHH cũng được phát hành cổ phần để chuyển đổi thành công ty cổ phần',
            'Công ty cổ phần, công ty TNHH và công ty hợp danh',
            'Tất cả các loại hình DN nêu trên'
        ],
        answer: 'Công ty cổ phần, công ty TNHH và công ty hợp danh'
    },
    // end question 71
    {
        question: 'UBCKNN có thẩm quyền quyết định tạm ngưng, đình chỉ một phần hoặc toàn bộ giao dịch của Sở GDCK khi xảy ra sự cố hệ thống giao dịch làm ảnh hưởng đến hoạt động giao dịch bình thường của TTCK trong thời gian tối đa bao lâu',
        choices: [
            '05 ngày', '05 ngày làm việc', 'không có quy định thời gian tạm ngưng, đình chỉ', 
            'đến thời điểm những nguyên nhân dẫn đến việc tạm ngừng, đình chỉ một phần hoặc toàn bộ giao dịch của Sở giao dịch CKVN được khắc phục'
        ],
        answer: '05 ngày làm việc'
    },
    {
        question: 'Quỹ đầu tư chứng khoán F là quỹ thành viên được thành lập năm 2020, trong đó có 1 tổ chức góp vốn vào quỹ thành viên là công ty TNHH có vốn điều lệ 100 tỷ đồng và hoạt động trong lĩnh vực nông nghiệp. Đến thời điểm luật chứng khoán 2019 có hiệu lực, theo đó quỹ thành viên là quỹ ĐTCK có số thành viên tham gia góp vốn từ 02 đến 99 thành viên và chỉ bao gồm thành viên là NĐTCK chuyên nghiệp, tổ chức góp vốn nêu trên phải làm gì để được tiếp tục sở hữu chứng chỉ quỹ tương ứng với phần vốn đã góp vào quỹ thành viên',
        choices: [
            'Tổ chức góp vốn phải thực hiện tăng VĐL trên 100 tỷ VNĐ',
            'Tổ chức góp vốn phải thực hiện chào bán cổ phiếu lần đầu ra công chúng để chuyển đổi thành công ty cổ phần và sau đó thực hiện niêm yết hoặc đăng ký giao dịch cổ phiếu',
            'Tổ chức góp vốn không thể tiếp tục sở hữu chứng chỉ quỹ mà phải chuyển nhượng cho cá nhân, tổ chức khá đủ điều kiện tham gia',
            'Đương nhiên được tiếp tục sở hữu CCQ tương ứng phần vốn đã góp'
        ],
        answer: 'Đương nhiên được tiếp tục sở hữu CCQ tương ứng phần vốn đã góp'
    },
    {
        question: 'Đối với các DN được chuyển đổi thành công ty cổ phần theo pháp luật về chuyển DNNN và CTTNHH MTV của DN do NN nắm giữ 100% VĐL thành công ty CP, đã thực hiện đăng ký giao dịch trên hệ thống Upcom trước ngày 1/1/21 nhưng chưa được UBCKNN xác nhận hoàn tất đăng ký công ty đại chúng, thời điểm bị huỷ đăng ký giao dịch',
        choices: [
            'Ngay khi Nghị định quy định chi tiết thi hành một số điều của Luật chứng khoán 2019 có hiệu lực',
            'Sau 01 năm kể từ ngày Nghị định quy định chi tiết thi hành một số điều của Luật chứng khoán 2019 có hiệu lực',
            'Sau 02 năm kể từ ngày Nghị định quy định chi tiết thi hành một số điều của Luật chứng khoán 2019 có hiệu lực',
            'Không bị huỷ đăng ký giao dịch'
        ],
        answer: 'Sau 01 năm kể từ ngày Nghị định quy định chi tiết thi hành một số điều của Luật chứng khoán 2019 có hiệu lực'
    }, 
    {
        question: 'Trường hợp công ty quản lý quỹ có hơn 1 người đại diện pháp luật thì người nào sẽ chịu trách nhiệm cung cấp tài liệu và làm việc với UBCKNN',
        choices: [
            'Đương nhiên là Chủ tịch HĐQT',
            'Đương nhiên là Tổng Giám đốc/ giám đốc',
            'Là người đại diện pháp luật mà công ty đăng ký',
            'Là Chủ tịch HĐQT hoặc Tổng Giám đốc/ giám đốc mà công ty đăng ký'
        ],
        answer: 'Là Chủ tịch HĐQT hoặc Tổng Giám đốc/ giám đốc mà công ty đăng ký'
    },
    {
        question: 'Một công ty chúng khoán là công ty trách nhiệm hữu hạn một thành viên do tổ chức làm chủ sử hữu. Tổng giám đốc công ty đồng thời là người đại diện theo pháp luật duy nhất đi công tác đột xuất nên chưa kịp làm thủ tục ủy quyền cho người khác thực hiện quyền và nghĩa vụ của người đại diện theo pháp luật. Do tình hình dịch bệnh Covid-19, người này bị mắc kẹt tại nước ngoài từ ngày 01/01/2021, để đảm bảo tuân thủ quy định doanh nghiệp phải có ít nhất 1 người đại diện theo pháp luật cư trú tại Việt Nam, công ty chúng khoản phải làm thế nào?',

        choices: [
            'Chủ tịch công ty đương nhiên trở thành người đại diện theo pháp luật',
            'Người đại diện theo pháp luật của tổ chức là chủ sở hữu công ty dương nhiên trở thành người đại diện theo pháp luật',
            'Chủ sở hữu công ty cử người khác làm đại diện pháp luật' , 
            'Chủ tịch công ty cử người khác làm đại diện pháp luật',
        ],
        answer: 'Chủ sở hữu công ty cử người khác làm đại diện pháp luật'
    },
    {
        question: 'Mức phạt tiền tối đa trong lĩnh vực CK và TTCK đối với tổ chức vi phạm là',
        choices: [
            '1 tỷ', '2 tỷ', '3 tỷ', 'Không giới hạn'
        ],
        answer: '3 tỷ'
    },
    {
        question: 'Các hình thức xử phạt dưới đây thuộc thẩm quyền xử phạt vi phạm hành chính của Chánh thanh tra UBCKNN, ngoại trừ', 
        choices:[
            'Phạt cảnh cáo',
            'Phạt tiền tối đa 3.000.000.000 VNĐ đối với tổ chức và tối đa 1.500.000.000 VNĐ với cá nhân',
            'Tước quyền sử dụng GCN đăng ký hoạt động VP đại diện, CCHNCK theo quy định',
            'Đình chỉ giao dịch CK theo quy định'
        ],
        answer: 'Phạt tiền tối đa 3.000.000.000 VNĐ đối với tổ chức và tối đa 1.500.000.000 VNĐ với cá nhân'
    },
    {
        question:'Chủ tịch UBCKNN có quyền',
        choices: [
            'Phạt tiền tối đa đến 100.000.000 đối với tổ chức và tối đa 50.000.000 đối với cá nhân có hành vi vi phạm khác trong lĩnh vực CK',
            'Phạt tiền tối đa đến 500.000.000 đối với tổ chức và tối đa 100.000.000 đối với cá nhân có hành vi vi phạm khác trong lĩnh vực CK',
            'Phạt tiền tối đa đến 1.500.000.000 đối với tổ chức và tối đa 500.000.000 đối với cá nhân có hành vi vi phạm khác trong lĩnh vực CK',
            'Phạt tiền tối đa đến 3.000.000.000 đối với tổ chức và tối đa 1.500.000.000 đối với cá nhân có hành vi vi phạm khác trong lĩnh vực CK'
        ],
        answer: 'Phạt tiền tối đa đến 3.000.000.000 đối với tổ chức và tối đa 1.500.000.000 đối với cá nhân có hành vi vi phạm khác trong lĩnh vực CK'
    },
    {
        question: 'Thời điểm tính thời hiệu xử phạt vi phạm hành chính trong lĩnh vực CK được quy định như sau',
        choices: [
            'Đối với hành vi vi phạm hành chính đang được thực hiện thì thời hiệu tính từ khi người có thẩm quyền thi hành công vụ phát hiện hành vi vi phạm',
            'Đối với hành vi vi phạm hành chính đã kết thúc thì thời hiệu tính từ khi người có thẩm quyền thi hành công vụ phát hiện hành vi vi phạm',
            'Đối với hành vi vi phạm hành chính đã kết thúc thì thời hiệu tính từ khi chấm dứt vi phạm',
            'Cả a và c'
        ],
        answer: 'Cả a và c'
    },
    {
        question: 'Chào bán chứng khoán riêng lẻ là việc chào bán chứng khoán theo một trong các phương thực sau đây',
        choices: [
            'Chào bán cho dưới 100 NĐT, không kể NĐT CK chuyên nghiệp',
            'Chào bán cho từ 100 NĐT trở lên, không kể NĐT CK chuyên nghiệp',
            'Chỉ chào bán cho NĐT CK chuyên nghiệp',
            'Cả a, c ',
            'Cả b, c'
        ],
        answer: 'Cả a, c '
    },
    {
        question: 'Chào bán chứng khoán ra công chúng là việc chào bán CK theo một trong các phương thức sau đây, ngoại trừ',
        choices: [
            'Chào bán qua phương tiện thông tin đại chúng',
            'Chào bán cho từ 100 NĐT trở lên, không kể NĐT CK chuyên nghiệp' ,
            'Chỉ chào bán cho NĐT CK chuyên nghiệp',
            'Chào bán cho các NĐT không xác định'
        ],
        answer: 'Chỉ chào bán cho NĐT CK chuyên nghiệp'
    },
    // end 82
    {
        question: 'Công ty đại chúng mua lại CK của chính mình phải đáp ứng các điều kiện sau đây, ngoại trừ',
        choices: [
            'Có quyết định của ĐHCĐ thông qua việc mua lại CP để giảm VĐL, phương án mua lại , trong đó nêu rõ số lượng, thời gian thực hiện, nguyên tắc xác định giá mua lại, có đủ nguồn vốn để mua lại cổ phiếu từ các nguồn sau: thặng dư vốn cổ phần, quỹ đầu tư phát triển, lợi nhuận sau thuế chưa phân phối, quỹ khác thuộc VCSH để bổ sung vốn điều lệ theo quy định của pháp luật',
            'Có CTCK được chỉ định thực hiện giao dịch, trừ trường hợp CTCK là thành viên của Sở giao dịch CKVN mua lại cổ phiếu của chính mình',
            'Đang trong quá trình chào bán, phát hành cổ phiếu để huy động thêm vốn',
            'Đáp ứng các điều kiện theo quy định của pháp luật trong trường hợp công ty đại chúng thuộc ngành, nghề đầu tư kinh doanh có điều kiện'
        ],
        answer: 'Đang trong quá trình chào bán, phát hành cổ phiếu để huy động thêm vốn'
    },
    {
        question: 'NHTM được UBCKNN lựa chọn làm ngân hàng thanh toán khi đáp ứng các điều kiện sau đây, ngoại trừ',
        choices: [
            'Có giấy phép thành lập và hoạt động tại VN theo quy định',
            'Có VĐL dưới 10.000 tỷ VNĐ',
            'Hoạt động kinh doanh có lãi 02 năm gần nhất',
            'Đáp ứng tỷ lệ an toàn vốn tối thiếu theo quy định của pháp luật ngân hàng',
            'Có hệ thống cơ sở vật chất, kỹ thuật bảo đảm thực hiện thanh toán giao dịch và kết nối với hệ thống của Tổng công ty lưu ký bù trừ CKVN'
        ],
        answer: 'Có VĐL dưới 10.000 tỷ VNĐ'
    },
    {
        question: 'Công ty đại chúng phải công bố thông tin bất thường khi xảy ra một trong các sự kiện sau đây, ngoại trừ',
        choices: [
            'Tài khoản của công ty tại ngân hàng, chi nhánh ngân hàng nước ngoài bị phong toả hoặc được phép hoạt động trở lại sau khi bị phong toả',
            'Tạm ngừng kinh doanh, thay đổi nội dung đăng ký doanh nghiệp, thu hồi GCN đăng ký DN, sửa đổi, bổ sung hoặc bị đình chỉm thu hồi giấy phép thành lập và hoạt động hoặc giấy phép hoạt động',
            'BCTC năm đã được kiểm toán, BCTC 6 tháng đã dược soát xét bởi tổ chức kiểm toán được chấp thuận',
            'Quyết định mua lại cổ phiếu của công ty',
            'Thay đổi, bổ nhiệm mới người nội bộ'
        ],
        answer: 'BCTC năm đã được kiểm toán, BCTC 6 tháng đã dược soát xét bởi tổ chức kiểm toán được chấp thuận'
    },
    {
        question: 'Tổ chức cá nhân, nhóm người liên quan, nhóm NĐT nước ngoài có liên quan phải công bố thông tin khi:',
        choices: [
            'Khi trở thành cổ đông lớn của công ty đại chúng, công ty đầu tư chứng khoán đại chúng',
            'Khi không còn là cổ đông lớn của công ty đại chúng, công ty đầu tư chứng khoán đại chúng',
            'Trước và sau khi giao dịch CP của công ty đại chúng, công ty đầu tư chứng khoán đại chúng',
            'Cả a và b',
            'Cả a, b, c'
        ],
        answer: 'Cả a và b'
    },
    {
        question: 'Nhà đầu tư, nhóm người liên quan, nhóm NĐT nước ngoài có liên quan phải công bố thông tin khi:',
        choices: [
            'Khi sở hữu từ 5% trở lên chứng chỉ quỹ của quỹ đóng',
            'Khi không còn sở hữu từ 5% trở lên chứng chỉ quỹ của quỹ đóng',
            'Trước và sau khi giao dịch CCQ của quỹ đóng',
            'Cả a , b' ,
            'Cả a, b, c'
        ],
        answer: 'Cả a , b'
    },
    {
        question: 'Tổ chức cá nhân, nhóm người liên quan, nhóm NĐT nước ngoài có liên quan là cổ đông lớn phải công bố thông tin khi có sự thay đổi về số lượng CP sở hữu:',
        choices: [
            'Qua các ngưỡng 1% số CP có quyền biểu quyết của công ty đại chúng, công ty đầu tư chứng khoán đại chúng',
            '1% số CP có quyền biểu quyết của công ty đại chúng, công ty đầu tư chứng khoán đại chúng',
            '3% số CP có quyền biểu quyết của công ty đại chúng, công ty đầu tư chứng khoán đại chúng',
            '5% số CP có quyền biểu quyết của công ty đại chúng, công ty đầu tư chứng khoán đại chúng'
        ],
        answer: 'Qua các ngưỡng 1% số CP có quyền biểu quyết của công ty đại chúng, công ty đầu tư chứng khoán đại chúng'
    },
    {
        question: 'Thanh tra chứng khoán là:',
        choices: [
            'Thanh tra chuyên ngành về CK và TTCK',
            'Thanh tra hành chính về CK và TTCK',
            'Thanh tra nhà nước về CK và TTCK',
            'Cả a và b'
        ],
        answer: 'Thanh tra chuyên ngành về CK và TTCK'
    },
    {
        question: 'Người có thẩm quyền xử phạt vi phạm hành chính trong lĩnh vực CK là',
        choices: [  
            'Chủ tịch UBCKNN',
            'Chánh thanh tra UBCKNN',
            'Trưởng đoàn thanh tra chuyên ngành CK',
            'Cả a và b',
            'Cả a, b, c'
        ],
        answer: 'Cả a, b, c'
    },
    {
        question: 'Người nội bộ của công ty đại chúng, công ty đầu tư chứng khoán đại chúng, quỹ đại chúng và người có liên quan của các đối tượng này phải công bố thông tin:',
        choices: [
            'Trước khi giao dịch cổ phiếu, quyền mua cổ phiếu trái phiếu chuyển đổi, quyền trải phiếu chuyển đổi, chứng chỉ quỹ, quyền mua chứng chỉ quỹ hoặc chứng quyền có dám bảo dựa trên chứng khoán của công ty đại chúng, công ty đầu tư chứng khoán đại chúng, quỹ đại chúng',
            'Sau khi giao dịch cổ phiếu trái phiếu chuyển đổi, quyển trái phiếu chuyển đổi, chứng chi quỹ, quyền mua chứng chỉ quỹ hoặc chứng quyền có dám bảo dựa trên chứng khoán của công ty đại chúng, công ty đầu tư chứng khoán đại chúng, quỹ đại chúng',
            'Khi có thay dổi sở hữu đối với cổ phiếu, quyền mua cổ phiếu, trái phiếu chuyển đổi, quyển trái phiếu chuyển đổi, chứng chỉ quỹ, quyền mua chứng chỉ quỹ hoặc chứng quyền có đảm bảo dựa trên chứng khoán của công ty đại chúng, công ty dầu tư chứng khoán đại chúng, quỹ đại chúng',
            'Cả  a, b',
            'Cả a, b, c'
        ],
        answer: 'Cả a, b, c'
    },
    {
        question: 'Theo quy định hiện nay, người hành nghề CK có hành vi vi phạm quy định về nhận lệnh và thực hiện lệnh giao dịch của KH sẽ bị phạt: \nI. 70 - 100 triệu VNĐ \n II. 100 - 150 triệu VNĐ \nIII. 150 - 200 triệu VNĐ \nIV. Tước quyền sử dụng CCHNCK trong thời hạn từ 1 - 3 tháng \nV. Đình chỉ hoạt động kinh doanh, dịch vụ chứng khoán của tổ chức kinh doanh chứng khoán trong thời gian từ 1 - 3 tháng',
        choices: [
            'I, IV',
            'II, V',
            'III, IV, V',
            'II, IV, V'
        ],
        answer: 'II, V'
    },
    {
        question: 'Theo quy định hiện nay, khi mượn thuê CCHNCK hoặc cho mượn, thuê CCHNCK sẽ bị phạt: \nI. 50 - 70 triệu VNĐ \nII. 70 - 100 triệu VNĐ \nIII. 100 - 150 triệu VNĐ \nIV. Tước quyền sử dụng CCHNCK trong thời hạn từ 1 - 3 tháng \nV. Đình chỉ hoạt động kinh doanh, dịch vụ chứng khoán của tổ chức kinh doanh chứng khoán trong thời gian từ 1 - 3 tháng',
        choices: [
            'I, IV',
            'II, V',
            'III, IV',
            'III, IV, V'
        ],
        answer: 'III, IV'
    },
    {
        question: 'Theo quy định hiện nay, khi sử dụng tài khoản, tài sản của KH khi không được KH uỷ thác hoặc không đúng nội dung uỷ thác, sử dụng tài khoản hoặc tiền, chứng khoán trên tài khoản của KH khi chưa được công ty chứng khoán uỷ quyền theo sự uỷ thác của KH cho CTCK bằng văn bản, người hành nghề CK sẽ bị phạt và áp dụng khắc phục: \nI. 100 - 200 triệu VNĐ \nII. 299 - 300 triệu VNĐ \nIII. 400 - 500 triệu VNĐ \nIV. Tước quyền sử dụng CCHN trong thời hạn từ 6 - 12 tháng \nV. Buộc hoàn trả CK, tiền thuộc sở hữu KH thời gian tối đa 60 ngày kể từ ngày quyết định áp dụng biện pháp này có hiệu lực thi hành đối với hành vi vi phạm nói trên' ,
        choices: [  
            'I, IV',
            'II, IV, V',
            'III, IV',
            'III, IV, V'
        ],
        answer: 'III, IV, V'
    },
    {
        question: 'Theo quy định hiện nay, khi có hành vi môi giới giao dịch vay, mượn tài sản giữa các khách hàng hoặc giữa khách hàng và bên thứ ba, trừ trường hợp vay chứng khoán để sửa lỗi giao dịch hoặc vay để thực hiện các giao dịch hoán đổi chứng chỉ quỹ hoán đổi danh mục, người hành nghề chứng khoán sẽ bị phạt: \nI. 150 - 200 triệu đồng \nII. 200 - 250 triệu đồng \nIII. 300 - 400 triệu đồng \nIV. Tước quyền sử dụng chững chỉ hành nghề chứng khoán trong thời hạn từ 06 tháng đến 12 tháng \nV. Buộc hoàn trả chứng khoản, tiền thuộc sở hữu của khách hàng thời gian tối đa 60 ngày kể từ ngày quyết định áp dụng biện pháp này có hiệu lực thi hành đối với hành vi vi phạm nói trên',
        choices: [
            'I, IV',
            'II, IV, V',
            'I, IV, V',
            'III, IV'
        ],
        answer: 'I, IV'
    },
    {
        question: 'Giả sử tỷ lệ ký quỹ trên tài khoản ký quỹ là 50%. Một khách hàng mua 2.000 Cổ phiếu của công ty A với giá trị là 100.000₫/cổ phiếu. Sau đó giá cổ phiếu A giảm xuống còn mức 70.000 trên cổ phiếu. Quy định hiện hành về mức duy trì tỷ lệ ký quỹ bắt buộc là 30% vậy công ty chứng khoán có thể yêu cầu ký quỹ bổ sung là',
        choices: [
            '10 triệu', '8 triệu', '6 triệu', '2 triệu'
        ],
        answer: '2 triệu'
    },
    {
        question: 'Theo quy định hiện hành, công ty chứng khoán, chi nhánh công ty chứng khoán nước ngoài ở Việt Nam bị phạt tiền từ 50 đến 70 triệu đồng khi thực hiện những hành vi vi phạm sau: \nI. Không thu thập tìm hiểu, cập nhật đầy đủ thông tin về khách hàng trừ trường hợp khách hàng không cung cấp đầy đủ thông tin, không cung cấp đầy đủ, trung thực cho khách hàng theo quy định của pháp luật \nII. Không lưu giữ đầy đủ hồ sơ thông tin khách hàng, không lưu giữ đầy đủ hồ sơ dữ liệu chứng từ liên quan đến hoạt động của công ty chứng khoán, chi nhánh công ty chứng khoán nước ngoài ở Việt Nam. Hồ sơ dữ liệu tài liệu chứng từ lưu giữ không phản ánh chi tiết chính xác các giao dịch của khách hàng của công ty chứng khoán nước ngoài ở Việt Nam theo quy định pháp luật, chi nhánh công ty chứng khoán nước ngoài ở Việt Nam trực tiếp quản lý giao dịch chứng khoán và nhận mở tài khoản giao dịch chứng khoán cho nhà đầu tư trong nước. \nIII. Đưa ra nhận định hoặc đảm bảo với khách hàng với mức thu nhập hoặc lợi nhuận đạt được trên khoản đầu tư của khách hàng hoặc đảm bảo khách hàng không bị thua lỗ trừ trường hợp đầu tư chứng khoán có thu nhập cố định',
        choices: [
            'I, II', 'I', 'II, III', 'I, III'
        ],
        answer: 'I'
    },
    {
        question: 'Theo quy định hiện hành, công ty quản lỹ quỹ bị phạt tiền từ 50 đến 70 triệu đồng khi thực hiện những hành vi vi phạm sau \nI. Không ký kết hợp đồng bằng văn bản với khách hàng khi cung cấp dịch vụ cho khách hàng hoặc hợp đồng ký két với khách hàng không có đầy đủ nội dung theo quy định của pháp luật \nII. Không tuân thủ điều lệ quỹ đầu tư, điều lệ công ty đầu tư CK, hợp đồng quản lý đầu tư \nIII. Vi phạm về việc cho vay hoặc giao vốn của công ty cho tổ chức, cá nhân \nIV. Thực hiện giao dịch tài sản cho khách hàng uỷ thác đầu tư với khối lượng, giá trị giao dịch trong năm thông qua một CTCK vượt quá giới hạn về tỷ lệ tổng khối lượng, giá trị giao dịch trong năm của khách hàng uỷ thác ',
        choices: [
            'I, II', 'I, III', 'II, III', 'I, II, III'
        ],
        answer: 'I, II'
    },
    {
        question: 'Theo quy định hiện hành, công ty chứng khoán bị phạt tiền từ 50 đến 70 triệu đồng khi thực hiện những hành vi vi phạm sau: \nI. Không tuân thủ quy định của pháp luật chứng khoán, pháp luật doanh nghiệp về quản trị điều hành đối với công ty chứng khoán không phải là công ty đại chúng, chi nhánh công ty chứng khoán nước ngoài tại Việt Nam \nII. Không ban hành đầy đủ các quy trình nội bộ, quy trình nghiệp vụ quy trình kiểm soát nội bộ và quản trị rủi ro, quy tắc đạo đức nghề nghiệp phù hợp với nghiệp vụ kinh doanh dịch vụ cung cấp \nIII. Vi phạm quy định về mở tài khoản giao dịch chứng khoán cho khách hàng \nIV. Vi phạm quy định về ủy thác quản lý tài khoản giao dịch chứng khoán của nhà đầu tư cá nhân',
        choices: [
            'I, II', 'I, II, III', 'I', 'III, IV'
        ],
        answer: 'I, II'
    },
    {
        question: 'Hình thức xử lý vi phạm người hành nghề chứng khoán khi sử dụng tài khoản, tài sản của khách hàng khi không được khách hàng ủy thác hoặc không đúng nội dung ủy thác, sử dụng tài khoản hoặc tiền, chứng khoán trên tài khoản của khách hàng khi chưa được công ty chứng khoán ủy quyền theo sự ủy thác của khách hàng cho công ty chứng khoán bằng văn bản là \nI. Khiển trách \nII. Cảnh cáo \nIII. Bị phạt tiền \nIV. Bị tước quyền sử dụng CCHNCK trong thời hạn từ 6 - 12 tháng',
        choices: [
            'I, IV', 'I, III, IV', 'II, IV', 'III, IV'
        ],
        answer: 'III, IV'
    },
    {
        question: 'Theo quy định hiện nay các hành vi mà UBCKNN có thẩm quyền xử lý người hành nghề chứng khoán vi phạm pháp luật là \nI. Cảnh cáo \nII. Phạt tiền \nIII. Áp dụng biện pháp khắc phục hậu quả \nIV. Áp dụng biện pháp xử phạt bổ sung',
        choices: [
            'II, III, IV', 'I, II, IV', 'II, III, I', 'I, II, IV'
        ],
        answer: 'II, III, IV'
    },
    {
        question: 'Trong hoạt động của văn phòng đại diện công ty chứng khoán, công ty Quản lý Quỹ nước ngoài tại Việt Nam, hành vi vi phạm làm đại diện cho tổ chức khác, thực hiện chuyển nhượng giấy chứng nhận đăng ký hoạt động văn phòng đại diện cho tổ chức, cá nhân bị xử lý như sau \nI. Phạt từ 50 triệu đồng đến 70 triệu đồng \nII. Phạt từ 70 triệu đồng đến 100 triệu đồng \nIII. Đình chỉ hoạt động văn phòng đại diện trong thời hạn từ 1 tháng đến 3 tháng \nIV. Tịch thu giấy chứng nhận đăng ký hoạt động văn phòng đại diện',
        choices: [
            'II, II, IV', 'I, III', 'II, III', 'I, II, IV'
        ],
        answer: 'I, III'
    },
    {
        question: 'Hành vi thực hiện một hoặc một số giao dịch nhằm che dấu thông tin về quyền sở hữu thực sự đối với một chứng khoán để trốn tránh hoặc để hỗ trợ người khác trốn tránh nghĩa vụ công bố thông tin theo quy định hoặc nghĩa vụ phải tuân thủ trong thực hiện chào mua công khai hoặc quy định phải tuân thủ về tỷ lệ sở hữu nước ngoài trên thị trường chứng khoán Việt Nam bị xử lý ra sao \nI. Cảnh cáo \nII. Phạt tiền từ 400 triệu đến 500 triệu đồng \nIII. Phạt tiền từ 500 triệu đến 600 triệu đồng \nIV. Tước quyền sử dụng chứng chỉ hành nghề chứng khoán trong thời hạn từ 18 đến 24 tháng \nV. Buộc nộp lại số lợi ích bất hợp pháp có được do hành vi vi phạm nói trên',
        choices: [
            'III, IV', 'II, IV, V', 'III, IV, V', 'IV, V'
        ],
        answer: 'II, IV, V'
    },
    {
        question: 'Hành vi vi phạm ghi nhận không chính xác tài sản các quyền tài sản và các lợi ích có liên quan đến tài sản và các lợi ích có liên quan đến tài sản nhận lưu ký của khách hàng; hạch toán tài khoản trên tài khoản lưu ký chứng khoán, tài khoản vị thế hoặc tài khoản ký quỹ; thanh toán không đúng thời hạn thời hiện chuyển quyền sở hữu chứng khoán đã đăng ký không qua Tổng công ty Lưu Ký và bù trừ chứng khoán Việt Nam; thành viên lưu ký thành viên bù trừ và nhân viên sẽ bị xử lý như sau: \n I.Phạt tiền từ 100 triệu đồng đến 150 triệu đồng đối với thành viên Lưu Ký và thành viên bù trừ \nII. Phạt tiền từ 50 triệu đồng đến 75 triệu đồng đối với nhân viên thành viên lưu ký, thành viên bù trừ \nII. Phạt tiền từ 200 triệu đến 300 triệu đồng đối với thành viên Lưu Ký và thành viên bù trừ; phạt tiền từ 75 triệu đến 100 triệu đồng đối với nhân viên thành viên lưu ký, thành viên bù trừ \nIII. Đình chỉ hoạt động lưu ký chứng khoán đối với thành viên lưu ký, bù trừ vi phạm \nIV. Tước quyền sử dụng chứng chỉ hành nghề từ 1 tháng đến 3 tháng đối với người hành nghề vi phạm',
        choices: [
            'I, III, IV', 'II, III, IV', 'I, IV', 'I, III'
        ],
        answer: 'I, IV'
    },
    {
        question: 'Hành vi trực tiếp hoặc gián tiếp mua hoặc cam kết mua cổ phiếu, quyền mua cổ phần và trái phiếu chuyển đổi của công ty mục tiêu hoặc chứng chỉ quỹ đầu tư mục tiêu, quyền mua chứng chỉ quỹ của quỹ đầu tư mục tiêu bên ngoài đợt chào mua công khai bị xử lý vi phạm như sau: \nI. Phạt tiền từ 100 triệu đồng đến 150 triệu đồng \nII.Phạt tiền từ 200 triệu đồng đến 300 triệu đồng \nIII. Đình chỉ hoạt động chào mua công khai trong thời gian từ 1 đến 3 tháng \nIV. Đình chỉ hoạt động chào mua công khai trong thời gian từ 3 đến 6 tháng \nV. Buộc nộp số lợi bất hợp pháp thu được từ hành vi trên',
        choices: [
            'II, III', 'I, III', 'II, IV', 'I, III, V'
        ],
        answer: 'I, III'
    },
    {
        question: 'Hành vi làm giả giấy tờ, xác nhận trên giấy tờ giả mạo chứng minh đủ điều kiện niêm yết trên hồ sơ niêm yết CK hoặc làm giả giấy tờ, xác nhận trên giấy tờ giả mạo trong hồ sơ đăng ký giao dịch CK sẽ bị xử lý như sau \nI. Phạt tiền từ 1000 triệu đến 2000 triệu \nII. Phạt tiền từ 2500 triệu đến 3000 triệu \nIII. Tịch thu tang vật vi phạm hành chính, phương tiện được sử dụng để vi phạm hành chính là giấy tờ giả mạo đối với hành vi vi phạm này \nIV. Buộc nộp lại số lợi bất hợp pháp thu được từ hành vi này',
        choices: [
            'I, III, IV', 'II, III, IV', 'II, III', 'I, IV'
        ],
        answer: 'II, III'
    },
    {
        question: 'Báo cáo tổng hợp thông tin tài chính theo quy ước là',
        choices: [
            'Báo cáo tài chính được lập để minh họa ảnh hưởng của sự kiện hoặc giao dịch trọng yếu đến thông tin tài chính chưa điều chỉnh của đơn vị với giả định sự kiện đã xảy ra hoặc giao dịch đã được thực hiện tại một ngày trước đó được chọn cho mục đích minh họa theo hướng dẫn của Bộ Tài Chính' ,
            'Báo cáo được lập để minh họa ảnh hưởng đến sự kiện hoặc giao dịch trong yếu đến thông tin tài chính chưa điều chỉnh của đơn vị với giả định sự kiện đã xảy ra hoặc giao dịch đã được thực hiện tại một ngày trước đó được chọn cho mục đích minh hoạ theo hưởng dẫn của Bộ Tài Chính' ,
            'Báo cáo được lập để nêu rõ ảnh hưởng của sự kiện hoặc giao dịch liên quan đến thông tin tài chính chưa điều chỉnh của đơn vị với giả định sự kiện đã xảy ra hoặc giao dịch được thực hiện tại một ngày trước đó dược chọn cho mục đích minh họa theo hướng dẫn của Bộ Tài Chính' ,
            'Báo cáo được lập để để minh họa ảnh hưởng của sự kiện trọng yếu đến thông tin tài chính chưa điều chỉnh của đơn vị với giả định sự kiện đã xảy ra hoặc giao dịch được thực hiện tại một ngày trước đó được chọn cho mục đích minh họa theo hướng hãn của Bộ Tài Chính'
        ],
        answer: 'Báo cáo được lập để minh họa ảnh hưởng đến sự kiện hoặc giao dịch trong yếu đến thông tin tài chính chưa điều chỉnh của đơn vị với giả định sự kiện đã xảy ra hoặc giao dịch đã được thực hiện tại một ngày trước đó được chọn cho mục đích minh hoạ theo hưởng dẫn của Bộ Tài Chính' 
    },
    {
        question: 'Ngày kết thúc đợt phát hành cổ phiếu để hoán đổi là',
        choices: [
            'Ngày chốt danh sách cổ đông, thành viên để hoát đổi',
            'Ngày được tổ chức phát hành xác định để hoán đổi cổ phiếu của tổ chức phát hành với khoản nợ của tổ chức phát hành với chủ nợ',
            'Ngày được tổ chức phát hành xác định để hoán đổi cổ phiếu của tổ chức phát hành với cổ phần, phần vốn góp của tổ chức, cá nhân khác',
            'Ngày đăng ký cuối cùng để phân bổ quyền'
        ],
        answer: 'Ngày được tổ chức phát hành xác định để hoán đổi cổ phiếu của tổ chức phát hành với cổ phần, phần vốn góp của tổ chức, cá nhân khác'
    },
    {
        question: 'Nhà đầu tư chứng khoán chuyên nghiệp là nhà đầu tư sau',
        choices: [
            'Cá nhân có thu nhập chịu thuế năm gần nhất tối thiểu là 02 tỷ đồng tính đến thời điểm cá nhân đó được xác định tư cách là nhà đầu tư chứng khoán chuyên nghiệp theo hồ sơ khai thuế đã nộp cho cơ quan thuế hoặc chứng từ khấu trừ thuế của tổ chức, cá nhân chi trả' , 
            'Cá nhân có thu nhập chịu thuế năm gần nhất tối thiểu là 01 tỷ đồng tính đến thời điểm cá nhân đó được xác định tư cách là nhà đầu tư chứng khoán chuyên nghiệp theo hồ sơ khai thuế đã nộp cho cơ quan thuế hoặc chứng từ khấu trừ thuế của tổ chức, cá nhân chi trả' ,
            'Công ty có vốn điều lệ đã góp đạt trên 150 tỷ đồng hoặc tổ chức niêm yết, tổ chức đăng ký giao dịch' ,
            'Công ty có vốn điều lệ đã góp đạt trên 100 tỷ đồng hoặc tổ chức niêm yết, tổ chức đăng ký giao dịch'
        ],
        answer: 'Công ty có vốn điều lệ đã góp đạt trên 100 tỷ đồng hoặc tổ chức niêm yết, tổ chức đăng ký giao dịch'
    },
    {
        question: 'Một trong những điều kiện chào bán trái phiếu có bảo đảm ra công chúng là được bảo đảm thanh toán một phần hoặc toàn bộ gốc và lãi trái phiếu bằng một hoặc một số phương thức sau: \nI. Bảo lãnh thanh toán của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài \nII. Bảo đảm bằng nguồn thu của tổ chức phát hành. Nguồn thu của tổ chức phát hành phải đủ thanh toán gốc và lãi trái phiếu \nIII. Bảo đảm bằng cam kết của bên thứ ba. Cam kết phải cụ thể trách nhiệm của từng bên \nIV. Bảo đảm bằng tài sản của tổ chức phát hành, tài sản của bên thứ ba. Tài sản bảo đảm phải được định giá bởi tổ chức có chức năng thẩm định giả và được dăng ký, xử lý theo quy định của pháp luật về đăng ký giao dịch bảo đảm.',
        choices: [
            'I và II' , 'I và III', 'II và IV', 'II và III'
        ],
        answer: 'II và IV'
    },
    {
        question: 'Công ty đại chúng mua lại cổ phiếu của chính mình được bán ra cổ phiếu ngay sau khi mua lại trong các trường hợp sau đây: \nI. Công ty chứng khoán mua lại cổ phiếu của chính mình để sửa lỗi giao dịch hoặc mua lại cổ phiếu lô lẻ \nII. Công ty đại chúng mua lại cổ phiếu lô lẻ \nIII. Công ty đại chúng mua lại cổ phiếu lô lẻ theo phương án phát hành cổ phiếu để trả cổ tức, phương án phát hành cổ phiếu từ nguồn vốn chủ sở hữu \nIV. Công ty đại chúng mua lại cổ phiếu lô lẻ theo yêu cầu của cổ đông.',
        choices: [
            'I, III, IV', 'II, III, IV', 'II, III', 'III, IV'
        ],
        answer: 'III, IV'
    },
    {
        question: 'Trừ trường hợp mua lại cổ phiếu trong ứng với tỷ lệ sở hữu trong công ty hoặc mua lại cổ phiếu theo bản án, quyết định của Tòa án đã có hiệu lực pháp luật, quyết định của Trọng tài hoặc mua lại cổ phiếu thông qua giao dịch thực hiện theo phương thức khớp lệnh, công ty không được mua lại cổ phiếu của đối tượng nào sau đây: \nI. Người nội bộ và người có liên quan của người nội bộ theo quy định của Luật chứng khoán \nII. Người sở hữu cổ phiếu có hạn chế chuyển nhượng theo quy định của pháp luật và Điều lệ công ty \nIII. Cổ đông lớn theo quy định của Luật chứng khoán \nIV. Người lao động trong công ty',
        choices: [
            'I, II', 'II, III', 'I, II, III', 'Tất cả các phương án trên'
        ],
        answer: 'I, II, III'
    },
    {
        question: 'Khi được Đại hội đồng cổ đông ủy quyền và theo quy định tại điều lệ công ty, Hội đồng quản trị chỉ được thay đối phương án sử dụng vốn, số tiền thu được từ đợt chào bán, đợt phát hành với giá trị thay đổi là bao nhiêu? (trừ trường hợp chào bán trái phiếu không chuyển đổi, không kèm chứng quyền theo phương ăn được Hội đồng quản trị thông qua)',
        choices: [
            'Giá trị thay đổi nhỏ hơn 70% số vốn, số tiền thu dược từ đợt chào bán, đợt phát hành',
            'Giá trị thay đổi nhỏ hơn 50% số vốn, số tiền thu được từ đợt chào bán, đợt phát hành',
            'Khi được Đại hội cổ đông ủy quyền, Hội đồng quản trị được thay đổi toàn bộ phương án sử dụng số tiền thu được từ đợt chào bán và thực hiện báo cáo Đại hội đồng cổ đông tại cuộc họp gần nhất',
            'Hội đồng quản trị không được thay đổi phương án sử dụng vốn, số tiền thu được từ dợi chào bán, phát hành sau khi hoàn thành đợt chào bán, phát hành'
        ],
        answer: 'Giá trị thay đổi nhỏ hơn 50% số vốn, số tiền thu được từ đợt chào bán, đợt phát hành'
    },
    {
        question: 'Tất cả các câu sau đều mô tả đúng việc xử lý cổ phiếu nhà đầu tư không đăng ký mua, không nộp tiền mua, số cổ phiếu lẻ, ngoại trừ',
        choices: [
            'Tổ chức phát hành hiện thực phân phối số cổ phiếu nhà đầu tư không đăng ký, không nộp tiền mua số cổ phiếu lẻ cho một hoặc một số nhà đầu tư xác định phải bảo đảm điều kiện chào bán, diều kiện về quyền, nghĩa vụ của nhà đầu tư không thuận lợi hơn so với điều kiện chào bán cho cổ đông hiện hữu, trừ trường hợp Đại hội cổ đông có chấp thuận khác' ,
            'Đại hội cổ đông hoặc Hội đồng quản trị phải xác định tiêu chí, danh sách nhà đầu tư được mua cổ phiếu, Số cổ phiếu này bị hạn chế chuyển nhượng trong thời hạn tối thiểu I năm kể từ ngày kết thúc đợt chào bán' ,
            'Việc phân phối cổ phiếu cho tổ chức, cá nhân và người có liên quan dẫn đến tỷ lệ sở hữu của các đối tượng này vượt mức sở hữu theo quy định của Luật Chứng khoán về chào mua công khai phải được Đại hội cổ đông thông qua;' ,
            'Khi được Đại hội cổ đông ủy quyền Hội đồng quản trị được phân phối tiếp cổ phiếu cho nhà đầu tư bao gồm cả chào bán cho tổ chức, cá nhân và người có liên quan từ 10% vốn điều lệ trở lên của tổ chức phát hành trong một đợt chào bán hoặc trong các đợt chào bán, phát hành trong 12 tháng gần nhất'
        ],
        answer: 'Khi được Đại hội cổ đông ủy quyền Hội đồng quản trị được phân phối tiếp cổ phiếu cho nhà đầu tư bao gồm cả chào bán cho tổ chức, cá nhân và người có liên quan từ 10% vốn điều lệ trở lên của tổ chức phát hành trong một đợt chào bán hoặc trong các đợt chào bán, phát hành trong 12 tháng gần nhất'
    },
    {
        question: 'Công ty đại chúng đăng ký chào bán thêm cổ phiếu ra công chúng với giá thấp hơn mệnh giá, giá dự kiến chào bán được xác định như thế nào?',
        choices: [
            'Lấy ý kiến Đại hội cổ đông căn cứ trên bảng thống kê giá tham chiếu cổ phiếu của 30 ngày giao dịch liên tiếp trước ngày chốt danh sách cổ đông',
            'Giá dự kiến chào bán là giá tham chiếu cổ phiếu trong tối thiểu 30 ngày và tối da 60 ngày giao dịch liên tiếp liên tiếp ngày chốt danh sách cổ đông',
            'Lấy ý kiến Đại hội cổ động căn cứ trên bảng thống kê giá tham chiếu cổ phiếu của 60 ngày giao dịch liên tiếp liền trước ngày chốt danh sách cổ động hoặc họp Đại hội cổ đông thông qua phương án phát hành có xác nhận của tổ chức tư vấn hồ sơ đăng ký chào bán cổ phiếu ra công chúng' ,
            'Tất cả các phương án trên không đúng'
        ],
        answer: 'Lấy ý kiến Đại hội cổ động căn cứ trên bảng thống kê giá tham chiếu cổ phiếu của 60 ngày giao dịch liên tiếp liền trước ngày chốt danh sách cổ động hoặc họp Đại hội cổ đông thông qua phương án phát hành có xác nhận của tổ chức tư vấn hồ sơ đăng ký chào bán cổ phiếu ra công chúng'
    },
    {
        question: 'Khi đăng ký chào bán trái phiếu ra công chúng. Tổ chức phát hành hoặc trái phiếu đăng ký chào bán phải được xếp hạng tín nhiệm bởi tổ chức xếp hạng tín nhiệm được Bộ Tài chính cấp Giấy chứng nhận đủ điều kiện kinh doanh trong các trường hợp nào? \nI. Tổng giá trị trái phiếu theo mệnh giá huy động trong mỗi 12 tháng lớn hơn 1 tỷ đồng và lớn hơn 100% vốn chủ sở hữu căn cứ trên báo cáo tài chính kỳ gần nhất \nII. Tổng giá trị trái phiếu theo mệnh giá huy động trong mỗi 12 tháng lớn hơn 500 tỷ đồng và lớn hơn 50% vốn chủ sở hữu căn cứ trên báo cáo tài chính kỳ gần nhất \nIII. Tổng dư nợ trái phiếu theo mệnh giá tính đến thời điểm 100% vốn chủ sở hữu căn cứ trên báo cáo tài chính gần nhất \nIV. Tổng dư nợ trái phiếu theo mệnh giá tính đến thời điểm 50% vốn chủ sở hữu căn cứ trên báo cáo tài chính gần nhất',
        choices: [
            'I hoặc II', 'II hoặc III', 'I hoặc IV', 'II hoặc IV'
        ],
        answer: 'II hoặc III'
    },
    {
        question: 'Tổ chức tài chính quốc tế chào bán trái phiếu ra công chúng bằng đồng Việt Nam, trái phiếu chào bán là trái phiếu có kỳ hạn: ',
        choices: [
            '2 năm trở lên',
            'Không dưới 5 năm',
            'Từ 5 đến 10 năm',
            'Không dưới 10 năm'
        ],
        answer: 'Không dưới 10 năm'
    },
    {
        question: 'Công ty đại chúng chào bán cổ phiếu riêng lẻ với giá trị thấp hơn mệnh giá:',
        choices: [
            'Đối tượng tham gia đợt chào bán chỉ bao gồm nhà đầu tư chứng khoán chuyên nghiệp và việc chuyển nhượng cổ phiếu bị hạn chế tối thiểu là 3 năm kể từ ngày kết thúc đợi chào bán' ,
            'Đối tượng tham gia đợt chào bán chỉ bao gồm nhà đầu tư chiến lược và việc chuyển nhượng cổ phiếu bị hạn chế tối thiểu là 3 năm kể từ ngày kết thúc đợt chào bán' ,
            'Đối tượng tham gia đợt chào bán có thể là nhà đầu tư chiến lược và/hoặc nhà đầu tư chứng khoán chuyên nghiệp và việc chuyển nhượng cổ phiếu bị hạn chế tối thiểu là 3 năm kể từ ngày kết thúc đợt chào bán',
            ' Đối tượng tham gia đợt chào bán chỉ bao gồm nhà đầu tư chúng khoán chuyên nghiệp và việc chuyển nhượng cổ phiếu bị hạn chế tối thiểu là 1 năm kể từ ngày kết thúc đợt chào bán'
        ],
        answer: 'Đối tượng tham gia đợt chào bán chỉ bao gồm nhà đầu tư chiến lược và việc chuyển nhượng cổ phiếu bị hạn chế tối thiểu là 3 năm kể từ ngày kết thúc đợt chào bán'
    },
    {
        question: 'Tổ chức thực hiện bảo lãnh phát hành chứng khoán ra công chúng pháp đáp ứng điều kiện nào sau đây \nI. Được UBCKNN cấp phép thực hiện hoạt động bảo lãnh phát hành CK theo quy định Luật CK \nII. Đáp ứng các chỉ tiêu an toàn tài chính theo quy định pháp luật \nIII. Có vốn điều lệ trên 100 tỷ và không có nợ quá hạn căn cứ BCTC gần nhất \nIV. Không phải là người có liên quan đến tổ chức phát hành',
        choices: [  
            'I, II, III' ,
            'I, II, IV',
            'I, III, IV',
            'Tất cả các phương án trên'
        ],  
        answer: 'I, II, IV'
    },
    {
        question: 'Đối với trường hợp phát hành cổ phiếu theo chương trình lựa chọn cho người lao động tài liệu báo cáo kết quả đợi phát hành gửi UBCKNN kèm theo tài liệu nào? \nI. Quy chế phát hành ESOP \nII. Danh sách người lao động tham gia chương trình trong do nêu cụ thể về số lượng cổ phiếu của từng người lao động dã nộp tiền mua hoặc được phân phối (đối với trường hợp phát hành cổ phiếu thưởng cho người lao động) \nIII. Văn bản xác nhận của ngân hàng chi nhánh ngân hàng nước ngoài nơi mở tài khoản phong tỏa về số tiền thụ được từ đợt phát hành, trừ trường hợp phát hành cổ phiếu thưởng cho người lao động \nIV. Văn bản xác định tỷ lệ sở hữu nước ngoài trong trường hợp phát hành cho người lao động là nhà đầu tư nước ngoài',
        choices: [
            'I, II, III',
            'II, III, IV',
            'II, III',
            'III'
        ],
        answer: 'II, III'
    },
    {
        question: 'Tài liệu nào sau đây KHÔNG thuộc hồ sơ đăng ký chào mua công khai:',
        choices: [
            'Văn bản của công ty chứng khoán xác nhận làm đại lý chào mua công khai',
            'Quyết định của cấp có thẩm quyền của tổ chức đăng ký chào mua công khai thông qua việc chào mua công khai',
            'Giấy xác nhận bảo lãnh thanh toán của tổ chức tín dụng đối với tổ chức, cá nhân, chào mua công khai hoặc giấy xác nhận phong tỏa tài khoản ngân hàng của tổ chức cá nhân chào mua công khai đảm bảo tổ chức, cá nhân có đủ tiền để thực hiện chào mua công khai ',
            'Báo cáo tài chính năm gần nhất được kiểm toán của tổ chức chào mua'
        ],
        answer: 'Báo cáo tài chính năm gần nhất được kiểm toán của tổ chức chào mua'
    },
    {
        question: 'Nguyên tắc xác định giá chào mua công khai đối với trường hợp chào mua công khai thanh toán bằng tiền bao gồm: \nI. Giá chào mua không được thấp hơn bình quân giá tham chiếu của 60 ngày giao dịch liền trước ngày gửi giấy đăng ký chào mua công khai và không thấp hơn giá mua cao nhất của các đợt chào mua công khai đối với cổ phiếu, chứng chỉ quỹ của công ty mục tiêu, quỹ đầu tư mục tiêu trong thời gian này \nII. Trong quá trình chào mua công khai, tổ chức, cá nhân công khai, không được điều chính giảm giá mua công khai \nIII. Trong quá trình chào mua công khai, tổ chức, cá nhân công khai, không được điều chỉnh tăng giá mua công khai \nIV. Giá chào mua không dược thấp hơn bình quân giá tham chiếu của 30 ngày giao dịch liền trước ngày gửi giấy đăng ký chào mua công khai và không thấp hơn giá mua cao nhất của các đợt chào mua công khai đối với cổ phiếu, chứng chỉ quỹ của công ty mục tiêu, quỹ đầu tư mục tiêu trong thời gian này.',
        choices: [
            'I, II', 'III, IV', 'I', 'I, III'
        ],
        answer: 'I, II'
    },
    {
        question: 'Các câu sau đây mô tả về cổ phiếu quỹ, NGOẠI TRỪ:',
        choices: [
            'Cổ phiếu quỹ là cổ phiếu đã phát hành bởi công ty cổ phần và được mua lại bởi chính công ty đó',
            'Công ty đại chúng có cổ phiếu quỹ đã mua trước thời điểm Luật chứng khoản số 54/2019/QH14 có hiệu lực được bán cổ phiếu quỹ, dùng cổ phiếu quỹ làm cổ phiếu thưởng theo quy định tại Luật Chứng khoán số 70/2006/QH111 đã được sửa đổi, bổ sung một số điều theo Luật Chứng khoán số 62/2010/Q1112 và các văn bản quy định chi tiết thì hành các văn bản trên. Các công ty trên không được mua lại cổ phiếu của chính mình cho đến khi hoàn thành việc xử lý số cổ phiếu quỹ dã mua trước đó.',
            'Kể từ thời điểm Luật chứng khoán số 54/2019/QH14 có hiệu lực, công ty đại chúng không được phép bán có phiếu quỹ và phải làm thủ tục giảm vốn điều lệ tương ứng với tổng giá trị tính theo mệnh giá của cổ phiếu cũ hiện có.',
            'Công ty đại chúng thực hiện mua lại cổ phiếu của chính mình theo quy định của Luật chứng khoán số 54/2019/QH14 phải làm thủ tục giảm vốn điều lệ tương ứng với tổng giá trị tính theo mệnh giá của cổ phiểu được công ty mua lại trong thời hạn 10 ngày kể từ ngày hoàn thành việc thanh toán mua lại cổ phiếu.'
        ],
        answer: 'Kể từ thời điểm Luật chứng khoán số 54/2019/QH14 có hiệu lực, công ty đại chúng không được phép bán có phiếu quỹ và phải làm thủ tục giảm vốn điều lệ tương ứng với tổng giá trị tính theo mệnh giá của cổ phiếu cũ hiện có.'
        
    },
    {
        question: 'Công ty bị chia tách chấm dứt hoạt động trong trường hợp nào',
        choices: [
            'Được cơ quan có thẩm quyền chấp nhận',
            'Được cơ quan có thẩm quyền cấp giấy chứng nhận đăng ký kinh doanh',
            'Được cơ quan đăng ký kinh doanh cập nhật tình trạng pháp lý của công ty bị chia',
            'Công ty mới được cấp giấy chứng nhận đăng ký kinh doanh'
        ],
        answer: 'Được cơ quan đăng ký kinh doanh cập nhật tình trạng pháp lý của công ty bị chia'
    },
    {
        question: 'Tổ chức nào được quyền nắm giữ cổ phần ưu đãi có quyền biểu quyết',
        choices: [  
            'Tổ chức được Chính phủ uỷ quyền và cổ đông sáng lập',
            'Tổ chức được Chính phủ cấp giấy phép và cổ đông phổ thông',
            'Tổ chức được Chính phủ chỉ định và cổ đông sáng lập',
            'Tổ chức được Chính phủ uỷ quyền và cổ đông phổ thông'
        ],
        answer: 'Tổ chức được Chính phủ uỷ quyền và cổ đông sáng lập'
    },
    {
        question: 'Công ty cổ phần chỉ được trả cổ tức của cổ phần phổ thông khi có đủ các điều kiện nào dưới đây',
        choices: [
            'Đã hoàn thành nghĩa vụ thuế',
            'Đã trích lập các quỹ công ty và bù đắp lỗ trước đó theo quy định của pháp luật và điều kiện công ty',
            'Đã hoàn thành nghĩa vụ tài chính khác',
            'Đã thanh toán đủ các khoản nợ'
        ],
        answer: 'Đã trích lập các quỹ công ty và bù đắp lỗ trước đó theo quy định của pháp luật và điều kiện công ty'
    },
    {
        question: 'Công ty cổ phần thực hiện đăng ký thay đổi vốn điều lệ trong thời hạn bao nhiêu ngày kể từ ngày hoàn thành đợt chào bán',
        choices: [  
            '10 ngày', '15 ngày', '20 ngày', '30 ngày'
        ],
        answer: '10 ngày'
    },
    {
        question: 'Các cổ đông sáng lập phải cùng nhau đăng ký mua ít nhất bao nhiêu số cổ phần phổ thông được quyền chào bán khi đăng ký thành lập doanh nghiệp',
        choices: [
            '10%', '20%', '30%', '35%'
        ],
        answer: '20%'
    },
    {
        question: 'Cổ đông sở hữu cổ phần ưu đãi cổ tức có quyền nào sau đây',
        choices: [  
            'Nhận phần tài sản còn lại tương ứng với tỷ lệ sở hữu cổ phần tại công ty sau khi công ty đã thanh toán hết các khoản nợ, cổ phần ưu đãi hoàn lại khi công ty giải thể hoặc phá sản',
            'Tham gia phát biểu trong cuộc họp ĐHĐCĐ và thực hiện quyền biểu quyết trực tiếp hoặc thông qua người đại diện theo uỷ quyền hoặc hình thức khác do Điều lệ công ty, pháp luật quy định',
            'Ưu tiên mua cổ phần mới tương ứng với tỷ lệ cổ phần sở hữu trong công ty',
            'Biểu quyết các vấn đề thuộc thẩm quyền ĐHĐCĐ'
        ],
        answer: 'Nhận phần tài sản còn lại tương ứng với tỷ lệ sở hữu cổ phần tại công ty sau khi công ty đã thanh toán hết các khoản nợ, cổ phần ưu đãi hoàn lại khi công ty giải thể hoặc phá sản'
    },
    {
        question: 'Chứng quyền là loại chứng khoán nào sau đây',
        choices: [
            'Chứng khoán được phát hành cùng với việc phát hành trái phiếu hoặ cổ phiếu ưu đãi, cho phép người sở hữu được quyền mua một số cổ phiếu phổ thông nhất định theo mức giá đã được xác định trong khoảng thời gian xác định',
            'Chứng khoán có tài sản đảm bảo',
            'Chứng khoán do công ty cổ phần phát hành',
            'Chứng khoán được phát hành trên cơ sở chứng khoán khác của tổ chức được thành lập và hoạt động tại Việt Nam'
        ],
        answer: 'Chứng khoán được phát hành cùng với việc phát hành trái phiếu hoặ cổ phiếu ưu đãi, cho phép người sở hữu được quyền mua một số cổ phiếu phổ thông nhất định theo mức giá đã được xác định trong khoảng thời gian xác định'
    },
    {
        question: 'Nhà đầu tư nước ngoài là cá nhân được sở hữu bao nhiêu vốn điều lệ của công ty chứng khoán',
        choices: [
            'Dưới 49%',
            '49%',
            'Trên 49%',
            '51%'
        ],
        answer: '49%'
    },
    {
        question: 'Trường hợp xác định được ứng cử viên Hội đồng quản trị, Công ty đại chúng phải công bố thông tin liên quan đến các ứng cử viên tối thiểu bao nhiêu ngày',
        choices: [
            '3 ngày trước ngày gửi thông báo mời họp',
            '5 ngày trước ngày khai mạc họp ĐHĐCĐ',
            '10 ngày trước ngày gửi thông báo mời họp',
            '10 ngày trước ngày khai mạc họp ĐHĐCĐ',
        ],
        answer: '10 ngày trước ngày khai mạc họp ĐHĐCĐ'
    },
    {
        question: 'Theo quy định của Luật Chứng khoán, tổng công ty lưu ký và bù trừ chứng khoán Việt Nam có các quyền và nghĩa vụ sau đây, ngoại trừ',
        choices: [
            'Ban hành các quy chế đăng ký, lưu ký, bù trừ và thanh toán chứng khoán và các quy ché nghiệp vụ khác sau khi được UBCKNN chấp thuận;',
            'Làm trung gian hòa giải khi có các tranh chấp liên quan đến hoạt động đăng ký, lưu ký, bù trừ và thanh toán chứng khoán của các thành viên lưu ký',
            'Chấp thuận, thay đổi, hủy bỏ tư cách thành viên lưu ký của Tổng công ty lưu ký và bù trừ chứng khoán Việt Nam; đình chỉ hoạt động lưu ký chứng khoán của thành viên lưu ký; ',
            'Cung cấp dịch vụ đăng ký, lưu ký, bù trừ và thanh toán chứng khoán; đăng ký biện pháp đảm bao đối với chứng khoán đã đăng ký tập trung tại Tổng công ty lưu ký và bù trừ chứng khoán Việt Nam theo yêu cầu theo yêu cầu của khách hàng; cung cấp dịch vụ khác theo quy định tại Điều lệ của Tổng công ty lưu ký và bù trừ chứng khoán Việt Nam'
        ],
        answer: 'Làm trung gian hòa giải khi có các tranh chấp liên quan đến hoạt động đăng ký, lưu ký, bù trừ và thanh toán chứng khoán của các thành viên lưu ký',
    },
    {
        question: 'Trách nhiệm xác định Nhà đầu tư chứng khoán chuyên nghiệp tham gia mua chứng khoán khi thực hiện chào bán riêng lẻ, đăng ký lập quỹ thành viên thuộc về: ',
        choices: [
            'Ủy ban Chứng khoán Nhà nước',
            'Công ty chứng khoán',
            'Tổ chức phát hành, công ty quản lý quỹ đầu tư chứng khoán',
            'Không phải các phương án trên'
        ],
        answer: 'Tổ chức phát hành, công ty quản lý quỹ đầu tư chứng khoán'
    },
    {
        question: 'Trong thời hạn bao lâu kể từ ngày được công ty chứng khoán xác định nhà đầu tư chứng khoán chuyên nghiệp, nhà đầu tư không phải thực hiện xác định lại Nhà đầu tư chứng khoán chuyên nghiệp tham gia mua chứng khoán khi thực hiện chào bán riêng lẻ, đăng ký lập quỹ thành viên:',
        choices: [  
            '6 tháng', '1 năm', '1.5 năm','2 năm'
        ],
        answer: '1 năm'
    },
    {
        question: 'Trường hợp, thay đổi, bổ nhiệm thành viên lưu ký, thành viên bù trừ phải thông báo bằng văn bản cho Tổng công ty lưu ký và bù trừ chứng khoán Việt Nam kể từ khi việc thay đổi có hiệu lực trong thời hạn:',
        choices: [
            '3 ngày', '5 ngày', '7 ngày', '10 ngày'
        ],
        answer: '10 ngày'
    },
    {
        question: 'Tổng công ty lưu ký và bù trừ chứng khoán Việt Nam đình chỉ hoạt động bù trừ, thanh toán chứng khoán đối với thành viên bù trừ của Tổng công ty lưu ký và bù trừ chứng khoán Việt Nam sau khi được Ủy ban Chứng khoán Nhà nước chấp thuận khi để ra thiếu sót gây thiệt hại nghiệm trọng cho khách hàng tối đa:',
        choices: [
            '30 ngày', '60 ngày', '90 ngày', '120 ngày'
        ],
        answer: '90 ngày'
    },
    {
        question: 'Người được quyền mua cổ phần ưu đãi cổ tức, cổ phần ưu đãi hoàn lại và cổ phần ưu đãi khác do \nI. Điều lệ công ty quy định \nII. Đại hội đồng cổ động quyết định \nIII. Hội đồng Quản trị quyết định',
        choices: [
            'I, II', 'II', 'I, II, III', 'II'
        ],
        answer: 'I, II'
    },
    {
        question: 'Trưởng ban kiểm soát, kiểm soát viên bị cách chức khi không thực hiện nghĩa vụ nhiệm vụ, công việc được phân công (trừ trường hợp bất khả kháng) trong:',
        choices: [
            '3 tháng liên tục', '6 tháng liên tục', '9 tháng liên tục', '1 năm liên tục'
        ],
        answer: '3 tháng liên tục'
    },
    {
        question: 'Cuộc họp Đại hội đồng cổ đông khi có tổng số cổ đông tham dự họp đại diện trên',
        choices: [
            '50% tổng số phiếu biểu quyết',
            '51% tổng số phiếu biểu quyết',
            '65% tổng số phiếu biểu quyết',
            '70% tổng số phiếu biểu quyết'
        ],
        answer: '50% tổng số phiếu biểu quyết'
    },
    {
        question: 'Nhiệm kỳ của Kiểm soát viên là 05 năm và có thể được bầu lại với số nhiệm kỳ',
        choices: [
            'Không hạn chế', '02 nhiệm kỳ', '03 nhiệm kỳ', '05 nhiệm kỳ'
        ],
        answer: 'Không hạn chế'
    }, 
    {
        question: 'Tổ chức hoặc cá nhân khi trở thành hoặc không còn là cổ đông lớn của công ty đại chúng, công ty chứng khoán đại chúng phải công bố thông tin kể từ ngày trở thành hoặc không còn là cổ đông lớn trong thời hạn',
        choices: [
            '3 ngày làm việc' , 
            '5 ngày làm việc' ,
            '7 ngày làm việc' ,
            '10 ngày làm việc'
        ],
        answer: '5 ngày làm việc'
    },
    {
        question: 'Thời hạn tối đa có thể mà Công ty quản lý quỹ thực hiện huy động vốn của quỹ đại chúng kể từ ngày Giấy chứng nhận chào bán chứng chỉ quỹ ra công chúng có hiệu lực',
        choices: [
            '30 ngày', '60 ngày', '90 ngày', '120 ngày'
        ],
        answer: '120 ngày'
    },
    {
        question: 'Thành viên lập quỹ của ETF có thể là: \nI. Công ty quản lý quỹ \nII. Công ty chứng khoán \nIII. Ngân hàng lưu ký \nIV. Tất cả các phương án trên',
        choices: [
            'I và II', 'II và III', 'I và III', 'IV'
        ],
        answer: 'II và III'
    },
    {
        question: 'Lựa chọn đáp án sai trong những phương án dưới đây.\nCông ty đầu tư chứng khoán:',
        choices: [
            'Là quỹ đầu tư chứng khoán được tổ chức theo loại hình công ty cổ phần để đầu tư chứng khoán',
            'Phải uỷ thác vốn cho một công ty quản lý quỹ quản lý',
            'Không được thành lập chi nhánh văn phòng đại diện',
            'Được sử dụng trụ sở của công ty quản lý quỹ làm trụ sở chính'
        ],
        answer: 'Phải uỷ thác vốn cho một công ty quản lý quỹ quản lý'
    },
    {
        question: 'Theo quy định hiện hành của pháp luật chứng khoán, khi đầu tư vào chứng khoán phái sinh, công ty quản lý quỹ \nI. Không bị hạn chế khi đầu tư vào chứng khoán phái sinh \nII. Chỉ được đầu tư từ nguồn vốn uỷ thác \nIII. Chỉ được đầu tư nhằm mục đích phòng ngừa rủi ro \nIV. Chỉ được đầu tư nhằm mục đích phòng ngừa rủi ro cho danh mục chứng khoán cơ sở đang nắm giữ \nV. Đảm bảo tuân thủ quy định pháp luật điều chỉnh hoạt động quỹ đầu tư chứng khoán, công ty đầu tư chứng khoán',
        choices: [  
            'I', 'II', 'II, IV, V', 'II, III, V'
        ],
        answer: 'II, IV, V'
    },
    {
        question: 'Trong hoạt động quản lý quỹ đầu tư chứng khoán, công ty quản lý quỹ có thể nhận được thưởng hoạt động, ngoại trừ',
        choices: [
            'Quản lý quỹ đóng',
            'Quản lý quỹ thành viên',
            'Quản lý quỹ đầu tư bất động sản',
            'Quản lý quỹ hoán đổi danh mục'
        ],
        answer: 'Quản lý quỹ thành viên'
    },
    {
        question: 'Trong trường hợp được vay ngắn hạn theo quy định pháp luật, thời hạn tối đa công ty quản lý quỹ được vay để trang trải các chi phí cần thiết của quỹ đại chúng hoặc để thực hiện thanh toán các giao dịch chứng chỉ quỹ với nhà đầu tư',
        choices: [
            '15 ngày', '30 ngày', '45 ngày', '90 ngày'
        ],
        answer: '30 ngày'
    },
    {
        question: 'Trường hợp quỹ đóng, quỹ mở được đầu tư vào quỹ đại chúng khác hoặc công ty đầu tư chứng toán đại chúng khác, công ty quản lý quỹ phải đảm bảo: \nI. Không được đầu tư quá 15% tổng giá trị tài sản của quỹ vào chứng chỉ quỹ của một quỹ đại chúng, cổ phiếu của một công ty đầu tư chứng khoán đại chúng \nII. Không được đầu tư quá 20% tổng giá trị tài sẵn của quỹ vào chứng chỉ quỹ của một quỹ đại chúng, cổ phiếu của một công ty đầu tư chứng khoán đại chúng. \nIII. Không được đầu tư quá 30% tổng giá trị tài sản của quỹ vào chứng chỉ quỹ của một quỹ đại chúng, cổ phiếu của một công ty đầu tư chứng khoán đại chúng \nIV. Không được đầu tư quá 35% tổng giá trị tài sản của quỹ vào chứng chỉ quỹ của một quỹ đại chúng, cổ phiếu của một công ty đầu tư chứng khoán đại chúng',
        choices: [
            'I, III', 'I, IV', 'II, III', 'II, IV'
        ],
        answer: 'II, III'
    },
    {
        question: 'Quỹ hoán đổi danh mục dựa trên tham chiếu chỉ số cổ phiếu phải đáp ứng điều kiện cơ bản sau \nI. Danh mục có tối thiểu 8 cổ phiếu \nII. Danh mục có tối thiểu 10 cổ phiếu \nIII. Tỷ trọng của 1 cổ phiếu bất kỳ trong danh mục tối đa là 20% giá trị của chỉ số \nIV. Tỷ trọng của 1 cổ phiếu bất kỳ trong danh mục tối đa là 25% giá trị của chỉ số',
        choices: [
            'I và II', 'I và IV', 'II và III' , 'II và IV'
        ],
        answer: 'II và III'
    },
    //150
    {
        question: 'Trong thời gian có quyết định đặt công ty quản lý quỹ đầu từ chứng khoán vào tình trạng kiểm soát, Công ty thực hiện chế độ báo cáo tỷ lệ vốn khả dụng theo tần suất như sau:',
        choices: [
            'Định kỳ hàng tháng',
            'Định kỳ hàng tuần vào ngày thứ 2 ',
            'Dịnh kỳ hàng tuần vào ngày thứ 6',
            'Định kỳ 1 tháng 2 lần'
        ],
        answer: 'Định kỳ hàng tuần vào ngày thứ 2 '
    },
    {
        question: 'Trong trường hợp quỹ mở, quỹ chỉ số đầu tư được đầu tư vào trái phiếu doanh nghiệp phát hành riêng lẻ, trái phiếu phải đáp ứng quy định sau: \nI. Có cam kết mua lại của doanh nghiệp phát hành tối thiểu 1 lần trong 12 tháng \nII. Có cam kết mua lại của doanh nghiệp phát hành tối thiểu 1 lần trong 18 tháng \nIII. Mỗi lần cam kết mua lại tối thiểu 20% giá trị đợt phát hành \nIV. Mỗi lần cam kết mua lại tối thiểu 30% giá tri đợt phát hành',
        choices: [
            'I, II', 'I, IV', 'II, III', 'II, IV'
        ],
        answer: 'I, IV'
    },
    {
        question: 'Lựa chọn phương án sai về mô tả hoạt động quản lý vốn và tài sản quỹ đầu tư chứng khoán:',
        choices: [
            'Công ty quản lý quỹ không được sử dụng vốn và tài sản của quỹ để cho vay hoặc bảo lãnh cho bất kỳ khoản vay nào' ,
            'Công ty quản lý quỹ không được phép vay để tài trợ cho hoạt động của quỹ đại chúng' ,
            'Công ty quản lý quỹ không được sử dụng tài sản của quỹ để thực hiện các giao dịch ký quỹ',
            'Công ty quản lý quỹ không được sử dụng tài sản của quỹ để thực hiện các giao dịch bán khống, cho vay chứng khoán'
        ],
        answer: 'Công ty quản lý quỹ không được phép vay để tài trợ cho hoạt động của quỹ đại chúng'
    },
    {
        question: 'Khi thực hoạt động nghiệp vụ kinh doanh trong nước, Công ty quản lý quỹ được ủy quyền, thuê ngoài để cung cấp một phần hoặc toàn bộ các dịch vụ:',
        choices: [
            'Quản lý quỹ đầu tư chứng khoán',
            'Quản lý danh mục đầu tư CK',
            'Tư vấn đầu tư chứng khoán',
            'Tất cả các phương án trên đều sai'
        ],
        answer: 'Quản lý quỹ đầu tư chứng khoán'
    },
    {
        question: 'Trong hoán đổi danh mục, danh mục chứng khoán cơ cấu phải đáp ứng các điều kiện sau \nI.Bao gồm tối thiếu 35% số chứng khoán cơ sở hình thành chỉ số tham chiếu \nII. Bao gồm tối thiếu 50% số chứng khoán cơ sở hình thành chỉ số tham chiếu \nIII. Giá trị danh mục chứng khoán cơ cấu không thấp hơn 80% giá trị của danh mục chứng khoán tương ứng của chỉ số tham chiếu \nIV. Giá trị danh mục chứng khoán cơ cấu không thấp hơn 95% giá trị của danh mục chứng khoán tương ứng của chỉ số tham chiếu',
        choices: [
            'I, III',
            'I, IV' ,
            'II, III' ,
            'II, IV'
        ],
        answer: 'II, IV'
    },
    {
        question: 'Tất cả các câu sau đều mô tả hoạt động của quỹ đầu tư chứng khoán dạng mở, ngoại trừ:',
        choices: [
            'Chứng chỉ quỹ mở không được niêm yết trên Sở giao dịch chứng khoán' ,
            'Chứng chỉ quỹ mở được phát hành/ mua lại bởi công ty quản lý quỹ',
            'Được thưởng hoạt động cho quản lý quỹ trong mọi trường hợp' ,
            'Vốn điều lệ quỹ mở liên tục thay đổi' 
        ],
        answer: 'Được thưởng hoạt động cho quản lý quỹ trong mọi trường hợp'
    },
    {
        question: 'Trong hoạt động quản lý tài sản ủy thác, công ty quản lý quỹ có thể: \nI. Dùng tài sản của quỹ, của công ty đầu tư chứng khoán để đầu tư vào chính quỹ, công ty đầu tư chứng khoản đó \n II. Dùng tài sản của khách hàng ủy thác từ công ty quản lý danh mục, quản lý quỹ/ công ty chứng khoán do minh quản lý vào quỹ/ công ty đầu tư chứng khoán khác do mình quản lý. \nIII. Dùng tài sản của quỹ đại chúng, công ty đầu tư chứng khoán đại chúng để đầu tư vào chính công ty quản lý quỹ. \nIV. Tất cả đều sai ',
        choices: [
            'I, II', 'I, III', 'II, III', 'IV'
        ],
        answer: 'II, III'
    },
    //157
    {
        question: 'Công ty quản lý quỹ có quyền không đáp ứng một phần lệnh bán, lệnh mua, lệnh chuyển đổi của nhà đầu tư khi xảy ra một trong các trường hợp sau:',
        choices: [
            'Tổng giá trị các lệnh bán (kể cả lệnh bán từ hoạt động chuyển đổi) trừ tổng giá trị các lệnh mua (kể cả lệnh mua từ hoạt động chuyển đổi) tại ngày giao dịch chứng chỉ quỹ lớn hơn 10% giá trị tài sản ròng của quỹ' ,
            'Giá trị tài sản ròng của quỹ thấp hơn 50 tỷ đồng' ,
            'Giá trị phần đơn vị quỹ hoặc số đơn vị quỹ còn lại trên tài khoản của nhà đầu tư thấp hơn giá trị tối thiểu hoặc số lượng đơn vị quỹ tối thiểu để duy trì tài khoản của nhà đầu tư theo quy định tại Điều lệ quỹ và Bản cáo bạch' ,
            'Số lượng đơn vị quỹ lưu hành vượt quá khối lượng tối đa quy định tại Điểu lệ quỹ và Bản cáo bạch; ',
            'Tổng giá trị các lệnh bản (kể cả lệnh bán từ hoạt động chuyển đổi) trừ tổng giá trị các lệnh mua (kể cả lệnh mua từ hoạt động chuyển đổi) tại ngày giao dịch chứng chỉ quỹ lớn hơn 5% và nhỏ hơn 10% giá trị tài sản ròng của quỹ'
        ],
        answer: 'Tổng giá trị các lệnh bản (kể cả lệnh bán từ hoạt động chuyển đổi) trừ tổng giá trị các lệnh mua (kể cả lệnh mua từ hoạt động chuyển đổi) tại ngày giao dịch chứng chỉ quỹ lớn hơn 5% và nhỏ hơn 10% giá trị tài sản ròng của quỹ'
    },
    {
        question: 'Trong các nhiệm vụ sau đây, nhiệm vụ nào không thuộc chức năng của kiểm soát nội bộ trong công ty quản lý quỹ đại chúng theo quy định pháp luật hiện hành:',
        choices: [
            'Tham gia xây dựng quy trình, tổ chức thực hiện công tác quản trị rủi ro của công ty và cho từng khách hàng ủy thác; kịp thời nhận diện, đánh giá mức độ rủi ro, thiết lập hạn mức đầu tư và có biện pháp ngăn ngừa, quản lý các rủi ro tiềm ẩn trong hoạt động dầu tư của công ty và của khách hàng ủy thác; ', 
            'Giám sát bảo đảm giá trị tài sản ràng của danh mục ủy thác, quỹ đầu tư chứng khoán. công ty đầu tư chứng khoán được định giá phù hợp với quy định của pháp luật và quy định nội bộ; tài sản và các nguồn lực của công ty dược quản lý an toàn, hiệu quả; tài sản khách hàng ủy thác được quản lý tách biệt, đọc lập; báo cáo tài chính, báo cáo hoạt động, bảo các về các chi tiêu an toàn tài chính và các báo khác của công ty được lập rung thực, chính xác, kịp thời, cập nhật dầy dù theo quy định của pháp luật; ' ,
            'Giám sát, bảo đảm hệ thống thông tin tài chính và quản lý trung thực, dây dù, kịp thời và chính xác; có hệ thống thông tin dự phòng để kịp thời xử lý những sự cố phát sinh như thiên tai, chạy nổ, đảm bảo duy trì hoạt động liên tục của công ty;' ,
            'Thực hiện chức năng kiểm soát nội bộ trong trường hợp công ty quản lý quỹ không phải thành lập bộ phân kiểm toán nội bộ'
        ],
        answer: 'Thực hiện chức năng kiểm soát nội bộ trong trường hợp công ty quản lý quỹ không phải thành lập bộ phân kiểm toán nội bộ'
    },
    {
        question: 'Nguyên tắc nào sau đây không phải nguyên tắc của kiểm toán nội bộ:',
        choices: [
            'Độc lập; bộ phận kiểm toán nội bộ và hoạt động của bộ phận này dọc lập với các bộ phận và hoạt động khác của công ty quản lý quỹ, không chịu sự quản lý của Ban điều hành công ty quản lý quỹ. Nhân viên bộ phận kiểm toán nội bộ không được kiêm nhiệm làm việc tại các bộ phận khác của công ty quản lý quỹ: ', 
            'Khách quan; kiểm toán nội bộ phải khách quan, công bằng, không định kiển, không tác động, không bị can thiệp khi thực hiện nhiệm vụ của mình; ' ,
            'Trung thực; công tác kiểm toán nội bộ phải được thực hiện một cách trung thực, cần trọng và có trách nhiệm; ' ,
            'Phối hợp; bộ phận kiểm toán nội bộ được toàn quyển tiếp cận không hạn chế các thông tin, tài liệu của công ty. Thành viên Ban điều hành và toàn bộ nhân viên của công ty quản lý quỹ có trách nhiệm phối hợp, cung cấp dầy đủ, kịp thời, trung thực, chính xác toàn bộ thông tin, tài liệu liên quan, theo yêu cầu của kiểm toán nội bộ. Các bộ phận trong công ty có trách nhiệm thông báo cho kiểm toán nội bộ khi phát hiện những yếu kém, tồn tại, các sai phạm, rủi ro hoặc thất thoát lớn về tài sản của công ty hoặc của khách hàng ' ,
            'Công khai; bộ phận kiểm toán nội bộ, nhân viên kiểm toán nội bộ phải công khai các nội dung thực hiện kiểm toán trước khi tiến hành các bước thực hiện theo quy định. ' 
        ],
        answer:'Công khai; bộ phận kiểm toán nội bộ, nhân viên kiểm toán nội bộ phải công khai các nội dung thực hiện kiểm toán trước khi tiến hành các bước thực hiện theo quy định. '
    },
    {
        question: 'Nhân sự bộ phận kiểm toán nội bộ khi được bổ nhiệm không phải đảm bảo điều kiện nào trong các điều kiện sau:',
        choices: [
            'Không thuộc trường hợp đang bị truy cứu trách nhiệm hình sự hoặc chấp hành hình phạt tù hoặc bị cấm hành nghề chứng khoán theo quy định của pháp luật; ' ,
            'Không bị xử phạt vi phạm hành chính trong lĩnh vực chứng khoán và thị trường chứng khoản trong thời hạn 6 tháng gần nhất tính đến thời diễm được bổ nhiệm ' ,
            'Có chứng chỉ hành nghề quản lý tài sản tại các quốc gia là thành viên của Tổ chức hợp tác và phát triển kinh tế (OECD) hoặc đã thi đạt chứng chi quốc tế về phân tích đầu tư CFA từ bậc II trở lên (Chartered Finanial Analyst level II) hoặc CHA (Certified International Investment Analyst - Final Level); ' ,
            'Có chứng chỉ hành nghề chứng khoán ' , 
            'Có chứng chỉ chuyên môn về Quản lý tài sản và chứng chỉ Pháp luật về chứng khoán và thị trường chứng khoán'
        ],
        answer: 'Có chứng chỉ chuyên môn về Quản lý tài sản và chứng chỉ Pháp luật về chứng khoán và thị trường chứng khoán'
    },
    
    {
        question: 'Trong các loại hình tổ chức sau của công ty quản lý quỹ, nhân sự bộ phận kiểm toán được thực hiện kiêm nhiệm: ',
        choices: [
            'Công ty cổ phần' ,
            'Công ty TNHH 2 thành viên trở lên',
            'Công ty hợp danh',
            'Công ty TNHH một thành viên'
        ],
        answer: 'Công ty TNHH một thành viên'
    },
    //162
        {
        question: 'Cơ cấu tổ chức của công ty quản lý quỹ quản lý quỹ đại chúng khác biệt so với công ty đại chúng ở điểm nào sau đây',
        choices: [
            'Phải có người điều hành quỹ',
            'Phải có tối thiểu 2 người điều hành quỹ có chứng chỉ hành nghề quản lý quỹ',
            'Phải có tối thiểu 2 người điều hành quỹ có chứng chỉ hành nghề quản lý quỹ và có kinh nghiệm quản lý tài sản, quản lý quỹ 5 năm trở lên' ,
            'Phải có tối thiểu 2 người điều hành quỹ có chứng chỉ hành nghề quản lý quỹ và có kinh nghiệm quản lý tài sản, quản lý quỹ 4 năm trở lên' ,
            'Phải có tối thiểu 2 người điều hành quỹ có chứng chỉ hành nghề quản lý quỹ và có kinh nghiệm quản lý tài sản, quản lý quỹ 2 năm trở lên' 
        ],
        answer: 'Phải có tối thiểu 2 người điều hành quỹ có chứng chỉ hành nghề quản lý quỹ và có kinh nghiệm quản lý tài sản, quản lý quỹ 2 năm trở lên' 
    },
    {
        question: 'Trong hoạt động quản lý quỹ, việc giám sát và tuân thủ các quy định điều lệ quỹ là trách nhiệm của tổ chức nào dưới đây:',
        choices: [
            'Việc giám sát và tuân thủ các quy định điều lệ là trách nhiệm của công ty quản lý quỹ ',
            'Việc giảm sát và tuân thủ các quy định điều lệ là trách nhiệm của ngân hàng lưu ký ' ,
            'Việc giám sát và tuân thủ các quy định điều lệ là trách nhiệm của công ty quản lý quỹ, ngân hàng giám sát' ,
            'Việc giám sát và tuân thủ các quy định điều lệ là trách nhiệm của ngân hàng lưu ký giám sát'
        ],
        answer: 'Việc giám sát và tuân thủ các quy định điều lệ là trách nhiệm của ngân hàng lưu ký giám sát'
    },
    {
        question: 'Đối với hoạt động của quỹ hoán đổi danh mục (quỹ ETF), khi mức sai lệch giữa giá trị tài sản ròng trên một lô chúng chỉ quỹ so với chỉ số tham chiếu của quỹ ETF vượt ngưỡng nào sau đây thì công ty phải báo cáo UBCKNN:',
        choices: [
            '50%' , '60%' ,'70%' , '80%', '90%'
        ],
        answer: '90%'
    },
    {
        question: 'Các tổ chức nào sau đây được phép làm thành viên lập quỹ của quỹ hoán đổi danh mục:',
        choices: [
            'Công ty chứng khoán có đầy đủ các nghiệp vụ kinh doanh trừ nghiệp vụ môi giới chứng khoán' ,
            'Công ty quản lý quỹ' ,
            'Ngân hàng thương mại chưa đăng ký làm thành viên lưu ký' ,
            'Ngân hàng lưu ký',
            'Công ty đại chúng'
        ],
        answer: 'Ngân hàng lưu ký'
    },
    {
        question: 'Trong các khái niệm sau đây, khái niệm nào là đúng nhất theo quy định pháp luật hiện hành khi xác định giá trị rủi ro thị trường để tính tỷ lệ an toàn tài chính của công ty quản lý quỹ:',
        choices: [
            'Là giá trị tương ứng với mức độ tổn thất có thể xảy ra khi giá trị thị trưởng của tài sản đang sở hữu theo cam kết bảo lãnh phát hành theo chiều hướng thuận lợi' ,
            'Là giá trị tương ứng với mức độ lợi nhuận có thể xảy ra khi giá trị thị trường của tài sản đang sở hữu và dự kiến sẽ sở hữu theo cam kết bảo lãnh phát hành theo chiều hướng bất lợi' ,
            'Là giá trị tương ứng với mức độ tổn thất có thể xảy ra khi giá trị thị trường của tài sản đang sở hữu và dự kiến sẽ sở hữu theo cam kết bảo lãnh phát hành theo chiều hướng bất lợi' ,
            'Là giá trị tương ứng với mức độ tổn thất có thể xảy ra khi giá trị thị trường của tài sản đang sở hữu và dự kiến sẽ sở hữu thay đổi giá trị',
            'Tất cả các phương án trên'
        ],
        answer: 'Là giá trị tương ứng với mức độ tổn thất có thể xảy ra khi giá trị thị trường của tài sản đang sở hữu và dự kiến sẽ sở hữu theo cam kết bảo lãnh phát hành theo chiều hướng bất lợi'
    },
    //167
    {
        question: 'Trong các khái niệm sau đây, khái niệm nào là đúng nhất theo quy định pháp luật hiện hành khi xác định giá trị rủi ro hoạt động để tính tỷ lệ an toàn tài chính của công ty quản lý quỹ',
        choices: [
            'Là giá trị tương ứng với mức độ tổn thất có thể xảy ra do lỗi kỹ thuật, lỗi hệ thống' ,
            'Là giá trị tương ứng với mức độ tổn thất có thể xảy ra do lỗi hệ thống và quy trình nghiệp vụ, lỗi con người trong quy trình tác nghiệp, do thiếu vốn kinh doanh phải sinh từ các khoản chi phí, lỗ từ hoạt động đầu tư, do các nguyên nhân khách quan khác' ,
            'Là giá trị tương ứng với mức độ tổn thất có thể xảy ra do lỗi con người trong quy trình tác nghiệp, do thiếu vốn kinh doanh phát sinh từ các khoản chi phi, lỗ tử hoạt động đầu tư, do các nguyên nhân khách quan khác' ,
            'Là giá trị tương ứng với mức độ tổn thất có thể xảy ra do kỹ thuật, lỗi hệ thống và quy trình nghiệp vụ, lỗi con người trong quy trình tác nghiệp, do thiếu vốn kinh doanh phải sinh từ các khoản chi phi, lễ tử hoạt động đầu tư do các nguyên nhân khách quan khác' ,
            'Tất cả các phương án trên'
        ],
        answer: 'Là giá trị tương ứng với mức độ tổn thất có thể xảy ra do kỹ thuật, lỗi hệ thống và quy trình nghiệp vụ, lỗi con người trong quy trình tác nghiệp, do thiếu vốn kinh doanh phải sinh từ các khoản chi phi, lễ tử hoạt động đầu tư do các nguyên nhân khách quan khác' 
    },
    {
        question: 'Trong các loại thông tin phải công bố định kỳ của quỹ đại chúng, loại thông tin nào không phải công bố theo quy định:',
        choices: [
            'Báo cáo tài chính năm đã được kiểm toán' ,
            'Báo cáo tài chính bản niên đã được soát xét hoặc kiểm toán',
            'Báo cáo giao dịch của quỹ qua các công ty chứng khoán' ,
            'Báo cáo giá trị tài sản ròng' ,
            'Báo các thay đổi người điều hành quỹ'
        ],
        answer: 'Báo các thay đổi người điều hành quỹ'
    },
    {
        question: 'Trong các loại thông tin phải công bố bất thường của quỹ đại chúng, loại thông tin nào không phải công bố theo quy định:',
        choices: [
            'Quyết định thay đổi vốn điều lệ của quỹ đóng',
            'Sửa dổi Điều lệ, Bản cáo bạch',
            'Định giá sai giá trị tài sản ròng',
            'Vượt mức các hạn chế đầu tư và điều chỉnh sai lệch của danh mục đầu tư' ,
            'Dự kiến thay đổi ngân hàng lưu ký'
        ],
        answer: 'Dự kiến thay đổi ngân hàng lưu ký'
    },
    {
        question: 'Quy định nào dưới đây không phù hợp với quy định pháp luật hiện hành:',
        choices: [
            'Công ty đầu tư chứng khoán riêng lẻ là công ty có tối đa 30 nhà đầu tư tổ chức',
            'Công ty đầu tư chứng khoán riêng lẻ tự quản lý là công ty tự minh ra các quyết định đầu tư tài sản của công ty và không cần phải ủy thác qua một công ty quản lý quỹ để quản lý tài sản',
            'Công ty đầu tư chứng khoán riêng lẽ tự quản lý là công ty dầu tư chứng khoản tối da 99 cổ đông, trong đó giá trị góp vốn đầu tư mỗi cổ đông tổ chức tối thiểu là 3 tỷ dồng và của mỗi cá nhân tối thiểu là 01 tỷ đồng',
            'Công ty đầu tư chứng khoán đại chúng là công ty đầu tư chứng khoản đã thực hiện việc chào bán thành công cổ phiếu lần đầu ra công chứng',
            'Sản phẩm tài chính là loại chứng khoán có tài sản bảo đảm do công ty chứng khoản phát hành được dựa trên chứng khoán cơ sở theo hướng dẫn của Bộ Tài chính'
        ],
        answer: 'Công ty đầu tư chứng khoán riêng lẻ là công ty có tối đa 30 nhà đầu tư tổ chức'
    },
    {
        question: 'Quy định nào dưới đây phù hợp nhất theo quy định hiện hành với đổi tượng là ngân hàng thanh toán và ngân hàng lưu ký',
        choices: [
            'Là tổ chức tín dụng do Ngân hàng nhà nước cấp phép',
            'Chỉ được thanh toán tiền giao dịch chứng khoán',
            'Có vốn điều lệ trên 50.000 tỷ đồng',
            'Được Uỷ ban chứng khoán nhà nước chấp thuận sau khi đã thực hiện thủ tục đăng ký',
            'Là ngân hàng đáp ứng tỷ lệ an toàn vốn tối thiểu theo quy định pháp luật ngân hàng'
        ],
        answer: 'Được Uỷ ban chứng khoán nhà nước chấp thuận sau khi đã thực hiện thủ tục đăng ký'
    },
]
export default questionBank

// {
//     question: '',
//     choices: [

//     ],
//     answer: ''
// },
