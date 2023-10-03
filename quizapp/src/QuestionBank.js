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
        question: "Những loạt CK nào sau đây phải được niêm yết, đăng ký giao dịch trên hệ thống giao dịch CK \nI. CK đã chào bán ra công chúng, cổ phiếu của công ty đại chúng \nII. Chứng chỉ quỹ đóng, chứng chỉ quỹ hoán đổi danh mục \nIII. Công cụ nợ của chính phủ, trái phiếu được chính phủ bảo lãnh và trái phiếu chính quyền địa phương  \nIV.Chứng quyền có bảo đảm, hợp đồng tương lai, hợp đồng quyền chọn do UBCKNN chấp thuận" ,
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
        answer: 'I,II,IV'

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
        question: 'Điều kiện nào sau đây là điều kiện niêm yết trái phiếu trên Sở GDCK \nI. Có VĐL đã góp từ 10 tỷ trở lên \nII. Được HĐQT thông qua việc niêm yết \nIII. ROE năm liền trước năm đăng ký tối thiếu 15% \nIV.Phải là trái phiếu đã chào bán ra công chúng',
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
        question: 'Điều kiện là thành viên bù trử chung cho hoạt động thanh toán, bù trừ giao dịch chứng khoán phái sinh của CTCK \nI. Là thành viên lưu ký của Tổng công ty lưu ký bù trừ chứng khoán VN \nII. Vốn điều lệ, VCSH từ 1200 tỷ VND \nIII. Vốn điều lệ, VCSH từ 5000 tỷ VND \nIV.Không lỗ 2 năm gần nhất',
        choices: [
            'I, II, IV', 'II, IV', 'I, III, IV', 'Tất cả các phương án trên'
        ],
        answer: 'I, II, IV'
    },
    {
        question: 'Theo quy định của Luật Chứng khoán, Sở giao dịch CK không có quyền nào sau đây, loại trừ \n I. Ban hành quy chế đăng ký, lưu ký, bù trừ, thanh toán CK sau khi được UBCK chấp thuật \nII. Tạm ngừng đình chỉ hoặc huỷ bỏ giao dịch chứng khoán \nIII. Chấp thuận, huỷ bỏ niêm yết CK tại SGDCK \nIV. Làm trung gian hoà giải theo yêu cầu của thành viên giao dịch khi phát sinh tranh chấp liên quan đến giao dịch CK',
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
        question: 'Tổ chức, cá nhân đã được cấp mã số giao dịch CK phải báo cáo Tổng công ty lưu ký bù trừ CKCN v/v thay đổi thông tin liên quan đến mã số giao dịch CK trong các trường hợp nào \nI.Thay đổi thành viên lưu ký \nII.Thay đổi tên, quốc gia hoặc vùng lãnh thổ nơi đăng ký hoạt động, địa chỉ trụ sở chính, số giấy phép đăng ký kinh doanh đối với tổ chức \nIII. Thay đổi tên, quốc tịch, địa chỉ liên lạc, số hộ chiếu hoặc chứng thực cá nhân hợp pháp khác đối với cá nhân \nIV. Thay đổi số lượng CK nắm giữ',
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
        question: 'Theo quy định pháp luật VN, DN nào được chào bán cổ phiếu , ngoại trừ \nI. Công ty cổ phần \nII. Công ty TNHH chuyển thành công ty cổ phần \nIII. Doanh nghiệp nhà nước cổ phần hoá \nIV. Công ty hợp danh \n V. Doanh nghiệp tư nhân' ,
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
        question: 'Theo quy định pháp luật, tỷ lệ sở hữu nước ngoài được xác định là tổng tỷ lệ sở hữu cổ phần , phần vốn góp tính trên VĐL là',
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
            'I', 'I, II', 'Ii, III', 'Tất cả các phương án trên'
        ],
        answer: 'Ii, III'
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
        question: 'Khẳng định nào sau đây đúng nhất về người hành nghề chứng khoán \nI. Người làm việc tại CTCK, công ty quản lý quỹ đầu tư CK, chi nhánh công ty CK nước ngoại tại VN, chi nhánh công ty quản lý quỹ nước ngoài tại VN, công ty đầu tư CK \nII. Người làm việc cho công ty đầu tư CK và được UBCK cấp chứng chỉ hành nghề chứng khoán \nIII. Người được UBCK cấp chứng chỉ hành nghề CK',
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
        question: 'Khẳng định nào sau đây là đúng với công ty đại chúng \nI. Công ty cổ phần có VĐL đã góp từ 30 tỷ trở lên, có tối thiếu 10% số cổ phiếu có quyèn biểu quyết do ít nhất 10 NĐT chuyên nghiệp không phải là cổ đông lớn nắm giữ \nII. Công ty đã thực hiện chào bán thành công cổ phiếu lần đầu ra công chúng \nIII. Công ty có VĐL đã góp tw 50 tỷ trở lên',
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
        question: 'Khẳng định nào sau đây không đúng về phạm vi hoạt động của văn phòng tại diện công ty chứng khoán, công ty quản lý quỹ nước ngoài tại việt nam \nI. Xúc tiến xây dựng các dự án hợp tác trong lĩnh vực chứng khoán và thị trường chứng khoán tại việt nam \nII. Tư vấn khách hàng đầu tư chứng khoán \nIII. Thực hiện các hợp đồng thỏa thuận đã ký kết giữa công ty chứng khoán, công ty quan lý quỹ nước ngoài với các tổ chức kinh tế tại việt nam \nIV. Giảm sát thực hiện các dự án do công ty chứng khoán, công ty quản lý quỹ nước ngoài tài trợ tại việt nam ',
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
            'Ký hợp đồng bằng văn ban với khách hàng khi thực hiện dịch vụ cho khách hàng',
            'Thu thập thông tin về tình hình tài chính, khả năng chấp nhận rủi ro của khách hàng'
        ],
        answer: 'bảo đảm tối thiểu 03 nhân viên làm việc tại bộ phận nghiệp vụ phải có chứng chỉ hành nghề phù hợp với nghiệp vụ thực hiện'
    },
    {
        question: 'Người hành nghề chứng khoán không được thực hiện các hành vi sau đây, ngoại trừ ',
        choices: [
            'Mở, quản lý tài khoản giao dịch chứng khoán tại công ty chứng khoán nơi minh đang làm việc và phải duy trì tài khoản giao dịch chứng khoán tại công ty chủng khoản khác đã mở trước đó',
            'Đồng thời làm việc cho công ty chứng khoán và chi nhánh công ty quản lý quỹ nước ngoài tại việt nam',
            'thực hiện hành vi vượt quá phạm vi ủy quyền của công ty chứng khoán, công ty quản lý quỹ đầu tư chứng khoán, nơi mình dùng làm việc',
            'Không có phương án nào đúng'
        ],
        answer: 'Không có phương án nào đúng'
    },
    {
        question: 'Tổ chức nào dưới dây là đối tượng được xem xét chấp thuận cung cấp dịch vụ bù trừ, thanh toán giao dịch chứng khoán \nI. Công ty chứng khoán \nII. Chỉ thành công ty chứng khoán nước ngoài tại việt nam \nIII. Ngân hàng thương mại \nIV. Chi nhánh ngân hàng nước ngoài tại việt nam',
        choices: [
            'I,III', 'I, II', 'I, III, IV', 'Tất cả các phương án trên'
        ],
        answer: 'I, III, IV'
    },

    {
        question: 'Hạn chế đối với công ty chứng khoán, công ty quản lý quỹ đầu tư chứng khoán bao gồm \nI. Công ty chứng khoán được góp vốn thành lập, mua cổ phần, phần vốn góp để sở hữu hoặc cùng với người có liên quan (nếu có) sở hữu không quá 5% số cổ phiếu có quyền biểu quyết đang lưu hành của 1 công ty chứng khoán khác tại việt nam \nII. Công ty quản lý quỹ được góp vốn thành lập, mua cổ phần, phần vốn góp của 01 công ty quản lý quỹ để thực hiện hợp nhất, sát nhập  \nIII. Không được đưa ra nhận định hoặc đảm bảo với khách hàng về mức thu nhập hoặc lợi nhuận đạt được trên khoản đầu tư của mình hoặc đảm bao khách hàng không bị thua lỗ, trừ trường hợp đầu tư vào chứng khoán có thu nhập cố định \nIV. cổ đông sáng lập, thành viên góp vốn khi thành lập của công ty chứng khoán, công ty quản lý quỹ không được chuyển nhượng cổ phần hoặc phần vốn góp của mình trong thời hạn 05 năm kể từ ngày được cấp giấy phép, trừ trường hợp chuyển nhượng giữa các cổ đông sáng lập, thành viên góp vốn khi thành lập công ty',
        choices: [
            'I, II', 'Ii, III', 'III, IV', "Tất cả các phương án trên"
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
        question: 'Với tư cách là nhân viên một công ty chứng khoán, được khách hàng là ngân hàng thương mại có cổ phiếu trên sở giao dịch chứng khoán, yêu cầu tư vấn về việc bầu thành viên HĐQT tại đại hội đồng cổ đông thường niên sắp tới.  bạn sẽ tư vấn liên quan đến số lượng thành viên HĐQT như thế nào',
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
        question: 'Một cổ đông muốn uỷ quyền cho một cá nhân khác đại diện dự họp DHCD của một công ty niêm yết thì làm như nào', 
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
        question: 'Đối với các Dn được chuyển đổi thành công ty cổ phần theo pháp luật về chuyển DNNN và CTTNHH MTV của DN do NN nắm giữ 100% VĐL thành công ty CP, đã thực hiện đăng ký giao dịch trên hệ thống Upcom trước ngày 1/1/21 nhưng chưa được UBCKNN xác nhận hoàn tất đăng ký công ty đại chúng, thời điểm bị huỷ đăng ký giao dịch',
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
            'Đương nhiên là Tổng Giám đóc/ giám đốc',
            'Là người đại diện pháp luật mà công ty đăng ký',
            'Là Chủ tịch HĐQT hoặc Tổng Giám đóc/ giám đốc mà công ty đăng ký'
        ],
        answer: 'Là Chủ tịch HĐQT hoặc Tổng Giám đóc/ giám đốc mà công ty đăng ký'
    },
    {
        question: 'Một công ty chúng khoán là công ty trách nhiệm hữu hạn một thành viên do tổ chức làm chủ sử hữu. Tổng giám đốc công ty đồng thời là người đại diện theo pháp luật duy nhất đi công tác đột xuất nên chưa kịp làm thủ tục ủy quyền cho người khác thực hiện quyền và nghĩa vụ của người đại diện theo pháp luật. Do tình hình dịch bệnh Covid-19, người này bị mắc kẹt tại nước ngoài từ ngày 01/01/2021, để đảm bảo tuân thủ quy định doanh nghiệp phải có ít nhất 1 người đại diện theo pháp luật cư trú tại Việt Nam, công ty chúng khoản phải làm thế nào?',

        choices: [
            'Chủ tịch công ty đương nhiên trở thành người đại diện theo pháp luật',
            'Người đại diện theo pháp luật của tổ chức là chủ sở hữu công ty dương nhiên trở thành người đại diện theo pháp luật',
            'Chủ sở hữu công ty cả người khác làm đại diện pháp luật' , 
            'Chủ tịch công ty cử người khác làm đại diện pháp luật',
        ],
        answer: 'Chủ sở hữu công ty cả người khác làm đại diện pháp luật'
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
    }
    // end 82
]

export default questionBank