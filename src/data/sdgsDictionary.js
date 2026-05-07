// UN Official SDGs Dictionary Data
// Source: United Nations General Assembly Resolution A/RES/70/1
// "Transforming our world: the 2030 Agenda for Sustainable Development" (2015)
// https://sdgs.un.org/goals

const SDG_DICTIONARY = {
  overview: {
    ko: {
      title: 'SDGs란 무엇인가요?',
      description:
        'SDGs(지속가능발전목표)는 2015년 9월 25일, 유엔(UN)에서 193개 나라가 함께 정한 약속이에요. 2030년까지 지구를 더 좋은 곳으로 만들기 위해 17가지 목표와 169개의 세부 목표가 담겨 있어요.\n\n이 목표들은 가난, 굶주림, 교육, 환경, 평화 등 우리가 살아가면서 만나는 다양한 문제들을 해결하기 위해 만들어졌어요. 어른들만의 문제가 아니라, 여러분 같은 어린이들도 함께 생각하고 행동할 수 있어요!',
      source:
        '출처: 유엔(UN) 지속가능발전목표 공식 누리집 (sdgs.un.org) · 유엔총회 결의안 A/RES/70/1 "우리가 원하는 세상을 바꾸자: 지속가능발전을 위한 2030 의제" (2015년 9월 25일)',
    },
    en: {
      title: 'What are the SDGs?',
      description:
        'The SDGs (Sustainable Development Goals) are 17 goals agreed upon by 193 countries at the United Nations on September 25, 2015. Together with 169 targets, they aim to make the world a better place by 2030.\n\nThese goals address important challenges like poverty, hunger, education, environment, and peace. They\'re not just for adults — kids like you can think about and take action on them too!',
      source:
        'Source: United Nations SDGs Official Website (sdgs.un.org) · UN General Assembly Resolution A/RES/70/1 "Transforming our world: the 2030 Agenda for Sustainable Development" (25 September 2015)',
    },
    ja: {
      title: 'SDGsとは何ですか？',
      description:
        'SDGs（持続可能な開発目標）は、2015年9月25日に国連（UN）で193カ国が集まって一緒に定めた約束です。2030年までに地球をより良い場所にするための17の目標と169のターゲットが含まれています。\n\nこれらの目標は、貧困、飢餓、教育、環境、平和など、私たちが生きていく中で直面する様々な問題を解決するために作られました。大人だけの問題ではなく、みなさんのような子どもたちも一緒に考えて行動できます！',
      source:
        '出典：国連SDGs公式ウェブサイト（sdgs.un.org）· 国連総会決議A/RES/70/1「私たちの世界を変革する：持続可能な開発のための2030アジェンダ」（2015年9月25日）',
    },
  },
  goals: {
    1: {
      ko: {
        overview:
          '지구에는 먹을 것도, 집도, 학교도 없어서 힘들게 사는 사람들이 많아요. 이 목표는 2030년까지 모든 사람이 기본적인 생활을 할 수 있도록 모든 형태의 가난을 없애는 거예요.',
        targets: [
          { id: '1.1', text: '하루에 약 1,700원(1.25달러)도 없이 살아가는 아주 가난한 사람들이 없도록 해요.' },
          { id: '1.2', text: '각 나라 기준으로 가난하다고 여겨지는 사람의 수를 절반으로 줄여요.' },
          { id: '1.3', text: '어렵고 힘든 사람들을 도와주는 사회 보호 제도(예: 기초생활수급)를 모든 나라에 만들어요.' },
          { id: '1.4', text: '2030년까지 모든 사람이 재산을 가질 권리와 금융 서비스를 이용할 기회를 가지게 해요.' },
          { id: '1.5', text: '가난한 사람들이 홍수, 지진, 가뭄 같은 재난이 일어나도 잘 견딜 수 있도록 도와요.' },
        ],
      },
      en: {
        overview:
          'Many people around the world struggle without food, homes, or schools. This goal aims to eliminate poverty in all its forms by 2030, ensuring everyone has the basics for a decent life.',
        targets: [
          { id: '1.1', text: 'End extreme poverty — living on less than $1.25 per day — for all people everywhere.' },
          { id: '1.2', text: 'Reduce by at least half the proportion of people living in poverty in all countries.' },
          { id: '1.3', text: 'Implement social protection systems for all, including the poorest and most vulnerable.' },
          { id: '1.4', text: 'Ensure equal rights to property, financial services, and basic resources for all by 2030.' },
          { id: '1.5', text: 'Build the resilience of the poor and vulnerable so they can survive disasters like floods and earthquakes.' },
        ],
      },
      ja: {
        overview:
          '世界には食べ物も、家も、学校もなくて苦しんでいる人がたくさんいます。この目標は、2030年までにあらゆる形態の貧困をなくし、すべての人が基本的な生活を送れるようにすることです。',
        targets: [
          { id: '1.1', text: '1日1.25ドル未満で生活する極度の貧困を、あらゆる場所で終わらせます。' },
          { id: '1.2', text: '各国の基準による貧困状態にある人の割合を少なくとも半減させます。' },
          { id: '1.3', text: '最も貧しい人々を含む全員に社会保護制度を整備します。' },
          { id: '1.4', text: '2030年までに、すべての人が財産権や金融サービスへの平等なアクセスを持てるようにします。' },
          { id: '1.5', text: '貧しい人々が洪水や地震などの災害に強くなれるよう支援します。' },
        ],
      },
    },
    2: {
      ko: {
        overview:
          '지금도 세계 어딘가에서는 배를 곯으며 잠드는 아이들이 있어요. 이 목표는 모든 사람이 충분하고 건강한 음식을 먹을 수 있게 하고, 농사를 지속가능한 방법으로 발전시키는 거예요.',
        targets: [
          { id: '2.1', text: '2030년까지 세상의 굶주림을 없애고, 모든 사람이 1년 내내 충분하고 건강한 음식을 먹을 수 있게 해요.' },
          { id: '2.2', text: '5세 미만 어린이들의 영양 부족 문제를 없애고, 청소년과 임산부의 영양을 개선해요.' },
          { id: '2.3', text: '소규모 농부들이 더 많은 식량을 생산하고 공정한 소득을 얻을 수 있도록 지원해요.' },
          { id: '2.4', text: '토양을 건강하게 유지하면서도 충분한 식량을 생산하는 지속가능한 농업을 해요.' },
          { id: '2.5', text: '씨앗, 동물, 식물의 다양성을 보전해서 미래에도 다양한 식량을 먹을 수 있게 해요.' },
        ],
      },
      en: {
        overview:
          'Even today, some children go to bed hungry. This goal aims to end hunger, make sure everyone eats enough healthy food, and improve farming methods for the future.',
        targets: [
          { id: '2.1', text: 'End hunger and ensure all people have access to sufficient nutritious food year-round by 2030.' },
          { id: '2.2', text: 'End all forms of malnutrition, including undernutrition in children under 5.' },
          { id: '2.3', text: 'Double the agricultural productivity and incomes of small-scale food producers.' },
          { id: '2.4', text: 'Ensure sustainable food production systems that protect soil and the environment.' },
          { id: '2.5', text: 'Maintain genetic diversity of seeds, plants, and animals to ensure food variety in the future.' },
        ],
      },
      ja: {
        overview:
          '今でも世界のどこかでは、お腹を空かせて眠る子どもたちがいます。この目標は、すべての人が十分な栄養のある食べ物を食べられるようにし、農業を持続可能な形で発展させることです。',
        targets: [
          { id: '2.1', text: '2030年までに飢餓をなくし、すべての人が1年中十分な栄養のある食べ物を食べられるようにします。' },
          { id: '2.2', text: '5歳未満の子どもの栄養不足をなくし、青少年や妊婦の栄養を改善します。' },
          { id: '2.3', text: '小規模農家がより多くの食料を生産し、公正な収入を得られるよう支援します。' },
          { id: '2.4', text: '土壌を健康に保ちながら十分な食料を生産する持続可能な農業を推進します。' },
          { id: '2.5', text: '種子、動物、植物の多様性を保全し、将来も様々な食料を食べられるようにします。' },
        ],
      },
    },
    3: {
      ko: {
        overview:
          '병원에 가지 못하거나 예방주사를 맞지 못해서 아픈 사람들이 있어요. 이 목표는 어린이부터 어른, 노인까지 모두가 건강하고 행복하게 살 수 있도록 의료와 생활 환경을 개선하는 거예요.',
        targets: [
          { id: '3.1', text: '아기를 낳다가 돌아가시는 엄마들의 수를 크게 줄여요.' },
          { id: '3.2', text: '예방할 수 있는 병으로 신생아와 5세 미만 어린이들이 목숨을 잃는 일이 없도록 해요.' },
          { id: '3.3', text: '에이즈, 결핵, 말라리아 같은 전염병을 없애고 수인성 질병을 줄여요.' },
          { id: '3.4', text: '2030년까지 고혈압, 당뇨, 암 같은 만성질환으로 일찍 죽는 사람을 3분의 1로 줄여요.' },
          { id: '3.7', text: '모든 사람이 건강 상담과 출산 관련 의료 서비스를 자유롭게 이용할 수 있게 해요.' },
          { id: '3.8', text: '모든 사람이 병원을 이용하고 안전하고 효과적인 약을 사용할 수 있도록 해요.' },
        ],
      },
      en: {
        overview:
          'Some people can\'t get medical care or vaccines. This goal works to ensure everyone — from babies to the elderly — can live healthy, happy lives through better healthcare.',
        targets: [
          { id: '3.1', text: 'Reduce the global maternal mortality ratio.' },
          { id: '3.2', text: 'End preventable deaths of newborns and children under 5 years of age.' },
          { id: '3.3', text: 'End epidemics like AIDS, tuberculosis, malaria, and combat other communicable diseases.' },
          { id: '3.4', text: 'Reduce premature deaths from non-communicable diseases like cancer and diabetes by one-third by 2030.' },
          { id: '3.7', text: 'Ensure universal access to reproductive health-care services.' },
          { id: '3.8', text: 'Achieve universal health coverage, including access to medicines and vaccines for all.' },
        ],
      },
      ja: {
        overview:
          '病院に行けなかったり、予防接種を受けられなかったりして病気になる人がいます。この目標は、赤ちゃんからお年寄りまで、すべての人が健康で幸せに暮らせるよう医療と生活環境を改善することです。',
        targets: [
          { id: '3.1', text: '出産中や出産後に亡くなるお母さんの数を大幅に減らします。' },
          { id: '3.2', text: '予防できる病気で新生児や5歳未満の子どもが命を失うことがないようにします。' },
          { id: '3.3', text: 'エイズ、結核、マラリアなどの感染症をなくし、その他の伝染病を減らします。' },
          { id: '3.4', text: '2030年までに高血圧、糖尿病、がんなどの生活習慣病による早死にを3分の1に減らします。' },
          { id: '3.7', text: 'すべての人が健康相談や出産関連の医療サービスを自由に利用できるようにします。' },
          { id: '3.8', text: 'すべての人が医療サービスや安全で効果的な薬を利用できるようにします。' },
        ],
      },
    },
    4: {
      ko: {
        overview:
          '배움은 꿈을 이루는 데 꼭 필요해요. 이 목표는 세상 모든 어린이가 좋은 학교에 다니고, 평생 동안 배울 수 있는 기회를 가질 수 있도록 하는 거예요.',
        targets: [
          { id: '4.1', text: '2030년까지 모든 남녀 어린이가 무료로 초등학교와 중학교를 다닐 수 있게 해요.' },
          { id: '4.2', text: '어린 아이들이 초등학교에 입학하기 전에도 잘 성장할 수 있도록 돌봄과 교육을 제공해요.' },
          { id: '4.3', text: '모든 사람이 대학교나 직업 교육을 받을 수 있는 기회를 가질 수 있게 해요.' },
          { id: '4.5', text: '장애인, 여성, 소수 민족 등 모두가 차별 없이 좋은 교육을 받을 수 있게 해요.' },
          { id: '4.6', text: '2030년까지 모든 청소년과 어른이 읽기, 쓰기, 셈하기를 할 수 있게 해요.' },
          { id: '4.7', text: '학교에서 지속가능발전, 환경 보호, 세계 시민으로서의 가치를 가르쳐요.' },
        ],
      },
      en: {
        overview:
          'Learning is essential for achieving dreams. This goal ensures every child can attend a good school and that people of all ages have opportunities to keep learning throughout their lives.',
        targets: [
          { id: '4.1', text: 'Ensure all girls and boys complete free, equitable, and quality primary and secondary education by 2030.' },
          { id: '4.2', text: 'Ensure all children have access to quality early childhood development and care before primary school.' },
          { id: '4.3', text: 'Ensure equal access to affordable technical, vocational, and higher education.' },
          { id: '4.5', text: 'Eliminate all discrimination in education — for girls, disabled people, and minorities.' },
          { id: '4.6', text: 'Ensure all youth and a substantial proportion of adults achieve literacy and numeracy by 2030.' },
          { id: '4.7', text: 'Teach education for sustainable development, global citizenship, and environmental protection in schools.' },
        ],
      },
      ja: {
        overview:
          '学ぶことは夢を実現するために欠かせません。この目標は、世界中のすべての子どもが良い学校に通え、生涯を通じて学び続ける機会を持てるようにすることです。',
        targets: [
          { id: '4.1', text: '2030年までに、すべての男女の子どもが無料で公平な質の高い初等・中等教育を修了できるようにします。' },
          { id: '4.2', text: '小学校入学前の幼い子どもたちが適切なケアと教育を受けられるようにします。' },
          { id: '4.3', text: 'すべての人が大学や職業教育を受ける平等な機会を持てるようにします。' },
          { id: '4.5', text: '障害者、女性、少数民族など、すべての人が差別なく良い教育を受けられるようにします。' },
          { id: '4.6', text: '2030年までに、すべての青少年と大人が読み書きと計算ができるようにします。' },
          { id: '4.7', text: '学校で持続可能な開発、環境保護、世界市民としての価値観を教えます。' },
        ],
      },
    },
    5: {
      ko: {
        overview:
          '남자와 여자는 모두 똑같이 소중하고 중요해요. 이 목표는 여성과 소녀들이 남성과 똑같은 기회, 권리, 자유를 가질 수 있도록 하는 거예요.',
        targets: [
          { id: '5.1', text: '여성과 소녀들에 대한 모든 차별을 법과 제도로 없애요.' },
          { id: '5.2', text: '가정 폭력, 성폭력 등 여성에 대한 모든 형태의 폭력과 착취를 없애요.' },
          { id: '5.3', text: '어린이 결혼과 강제 결혼, 여성의 몸을 해치는 모든 나쁜 관행을 없애요.' },
          { id: '5.4', text: '집에서 하는 돌봄과 요리 같은 무급 노동의 가치를 인정하고, 남녀가 함께 분담해요.' },
          { id: '5.5', text: '여성이 정치, 경제, 지역사회의 모든 의사결정에 공평하게 참여하고 리더가 될 수 있게 해요.' },
          { id: '5.6', text: '모든 여성이 자신의 건강에 관한 선택과 권리를 자유롭게 행사할 수 있게 해요.' },
        ],
      },
      en: {
        overview:
          'Boys and girls are equally important. This goal works to give women and girls the same opportunities, rights, and freedoms as men and boys.',
        targets: [
          { id: '5.1', text: 'End all forms of discrimination against all women and girls everywhere.' },
          { id: '5.2', text: 'Eliminate all violence and exploitation against women and girls, including domestic violence.' },
          { id: '5.3', text: 'Eliminate child marriage and all harmful practices that hurt girls and women.' },
          { id: '5.4', text: 'Recognize and value unpaid care work at home, and share it equally between men and women.' },
          { id: '5.5', text: 'Ensure women\'s full and effective participation in leadership and decision-making.' },
          { id: '5.6', text: 'Ensure all women can freely make informed choices about their own health.' },
        ],
      },
      ja: {
        overview:
          '男の子も女の子も同じように大切な存在です。この目標は、女性や女の子が男性と同じ機会、権利、自由を持てるようにすることです。',
        targets: [
          { id: '5.1', text: 'あらゆる場所で女性や女の子に対するすべての差別をなくします。' },
          { id: '5.2', text: '家庭内暴力を含む、女性や女の子に対するすべての形態の暴力と搾取をなくします。' },
          { id: '5.3', text: '子どもの結婚や強制結婚、女性の身体を傷つけるすべての有害な慣行をなくします。' },
          { id: '5.4', text: '家庭でのケアや料理などの無償労働の価値を認め、男女が平等に分担するようにします。' },
          { id: '5.5', text: '女性が政治、経済、地域社会のすべての意思決定に平等に参加し、リーダーになれるようにします。' },
          { id: '5.6', text: 'すべての女性が自分の健康に関する選択と権利を自由に行使できるようにします。' },
        ],
      },
    },
    6: {
      ko: {
        overview:
          '깨끗한 물은 살아가는 데 꼭 필요해요. 이 목표는 세상 모든 사람이 안전한 물을 마시고 깨끗한 화장실을 사용할 수 있게 하는 거예요.',
        targets: [
          { id: '6.1', text: '2030년까지 모든 사람이 안전하고 깨끗한 물을 부담 없는 가격에 마실 수 있게 해요.' },
          { id: '6.2', text: '2030년까지 모든 사람이 깨끗한 화장실을 사용하고 손씻기 등 위생을 지킬 수 있게 해요.' },
          { id: '6.3', text: '오염된 물을 깨끗하게 처리하고, 강과 호수에 오폐수가 흘러들지 않도록 해요.' },
          { id: '6.4', text: '물을 낭비하지 않고 효율적으로 사용하고, 물 부족 문제를 해결해요.' },
          { id: '6.5', text: '지역의 물을 통합적으로 관리하고, 나라 간에도 협력해서 물 문제를 해결해요.' },
          { id: '6.6', text: '강, 호수, 습지, 지하수 등 소중한 물 관련 생태계를 보호해요.' },
        ],
      },
      en: {
        overview:
          'Clean water is essential for life. This goal ensures every person can drink safe water and use clean toilets, no matter where they live.',
        targets: [
          { id: '6.1', text: 'Achieve universal and equitable access to safe and affordable drinking water for all by 2030.' },
          { id: '6.2', text: 'Achieve access to adequate and equitable sanitation and hygiene for all by 2030.' },
          { id: '6.3', text: 'Improve water quality by reducing pollution and treating wastewater properly.' },
          { id: '6.4', text: 'Substantially increase water-use efficiency and address water scarcity.' },
          { id: '6.5', text: 'Implement integrated water resources management, including cross-border cooperation.' },
          { id: '6.6', text: 'Protect and restore water-related ecosystems like rivers, lakes, and wetlands.' },
        ],
      },
      ja: {
        overview:
          'きれいな水は生きるために欠かせません。この目標は、世界中のすべての人が安全な水を飲み、清潔なトイレを使えるようにすることです。',
        targets: [
          { id: '6.1', text: '2030年までに、すべての人が安全でお手頃な価格のきれいな水を飲めるようにします。' },
          { id: '6.2', text: '2030年までに、すべての人が清潔なトイレを使い、手洗いなどの衛生を保てるようにします。' },
          { id: '6.3', text: '汚染された水をきれいに処理し、川や湖に汚水が流れ込まないようにします。' },
          { id: '6.4', text: '水を無駄なく効率的に使い、水不足の問題を解決します。' },
          { id: '6.5', text: '地域の水を統合的に管理し、国をまたいでも協力して水問題を解決します。' },
          { id: '6.6', text: '川、湖、湿地、地下水など大切な水に関連する生態系を保護します。' },
        ],
      },
    },
    7: {
      ko: {
        overview:
          '전기와 에너지는 우리 삶에 꼭 필요해요. 이 목표는 모든 사람이 환경을 오염시키지 않는 깨끗한 에너지를 적당한 가격에 쓸 수 있게 하는 거예요.',
        targets: [
          { id: '7.1', text: '2030년까지 전기와 에너지를 전혀 쓸 수 없는 사람이 없도록 해요.' },
          { id: '7.2', text: '전 세계 에너지에서 태양광, 풍력 같은 재생 가능한 에너지의 비율을 크게 늘려요.' },
          { id: '7.3', text: '에너지를 더 효율적으로 사용해서 같은 에너지로 더 많은 일을 할 수 있게 해요.' },
        ],
      },
      en: {
        overview:
          'Energy powers our daily lives. This goal makes sure everyone can use clean, affordable energy that doesn\'t pollute the environment.',
        targets: [
          { id: '7.1', text: 'Ensure universal access to affordable, reliable, and modern energy services by 2030.' },
          { id: '7.2', text: 'Substantially increase the share of renewable energy (like solar and wind) in the global energy mix.' },
          { id: '7.3', text: 'Double the global rate of improvement in energy efficiency.' },
        ],
      },
      ja: {
        overview:
          '電気やエネルギーは私たちの生活に欠かせません。この目標は、すべての人が環境を汚染しないクリーンなエネルギーを適正な価格で使えるようにすることです。',
        targets: [
          { id: '7.1', text: '2030年までに、電気やエネルギーを使えない人がいなくなるようにします。' },
          { id: '7.2', text: '太陽光や風力などの再生可能エネルギーの割合を世界全体で大幅に増やします。' },
          { id: '7.3', text: 'エネルギーをより効率的に使い、同じエネルギーでより多くのことができるようにします。' },
        ],
      },
    },
    8: {
      ko: {
        overview:
          '일자리는 사람들이 스스로 생활할 수 있게 해 줘요. 이 목표는 누구나 안전하고 좋은 환경에서 일하고, 경제가 건강하게 성장할 수 있도록 하는 거예요.',
        targets: [
          { id: '8.1', text: '특히 개발도상국에서 경제가 꾸준히 성장할 수 있도록 해요.' },
          { id: '8.2', text: '새로운 기술과 아이디어로 경제를 다양하게 발전시켜 더 많은 가치를 만들어요.' },
          { id: '8.5', text: '2030년까지 원하는 사람 모두가 좋은 일자리를 가질 수 있게 해요. 특히 청년과 장애인의 기회를 늘려요.' },
          { id: '8.7', text: '어린이들이 위험한 곳에서 일하는 아동 노동을 완전히 없애요.' },
          { id: '8.8', text: '일하는 모든 사람의 권리를 보호하고, 일터를 안전하게 만들어요.' },
          { id: '8.9', text: '지역 문화와 환경을 살리는 지속가능한 관광 산업을 키워요.' },
        ],
      },
      en: {
        overview:
          'Having a job helps people support themselves and their families. This goal makes sure everyone can work in safe conditions and that economies grow in a fair and sustainable way.',
        targets: [
          { id: '8.1', text: 'Sustain per capita economic growth, especially in developing countries.' },
          { id: '8.2', text: 'Achieve higher economic productivity through diversification, technology, and innovation.' },
          { id: '8.5', text: 'Achieve full and productive employment and decent work for all by 2030, especially young people and people with disabilities.' },
          { id: '8.7', text: 'End forced labor and eradicate child labor in all its forms.' },
          { id: '8.8', text: 'Protect labor rights and promote safe and secure working environments for all workers.' },
          { id: '8.9', text: 'Promote sustainable tourism that celebrates local culture and environment.' },
        ],
      },
      ja: {
        overview:
          '仕事は人々が自立して生活するのに役立ちます。この目標は、誰もが安全で良い環境で働け、経済が健全に成長できるようにすることです。',
        targets: [
          { id: '8.1', text: '特に途上国において、経済が持続的に成長できるようにします。' },
          { id: '8.2', text: '新しい技術やアイデアで経済を多様に発展させ、より多くの価値を生み出します。' },
          { id: '8.5', text: '2030年までに、希望するすべての人が良い仕事に就けるようにします。特に若者と障害者の機会を増やします。' },
          { id: '8.7', text: '子どもたちが危険な場所で働く児童労働を完全になくします。' },
          { id: '8.8', text: '働くすべての人の権利を守り、職場を安全にします。' },
          { id: '8.9', text: '地域の文化と環境を活かした持続可能な観光産業を育てます。' },
        ],
      },
    },
    9: {
      ko: {
        overview:
          '도로, 다리, 학교, 인터넷 같은 기반 시설은 사람들의 삶을 편리하게 해 줘요. 이 목표는 이런 시설을 튼튼하게 만들고, 새로운 기술로 더 나은 사회를 만드는 거예요.',
        targets: [
          { id: '9.1', text: '모든 사람이 쉽게 이용할 수 있는 도로, 철도, 항구 등 믿을 수 있는 기반 시설을 만들어요.' },
          { id: '9.2', text: '모든 나라가 공장과 산업을 지속가능하게 발전시킬 수 있도록 해요. 개발도상국은 더 빠르게 성장할 수 있게 도와요.' },
          { id: '9.3', text: '작은 기업들도 돈을 빌리거나 투자를 받아서 사업을 키울 수 있게 해요.' },
          { id: '9.4', text: '공장과 산업이 환경을 오염시키지 않는 방법으로 운영될 수 있도록 개선해요.' },
          { id: '9.5', text: '새로운 기술을 연구하고 개발하는 데 더 많이 투자해요. 특히 개발도상국의 연구를 지원해요.' },
          { id: '9.c', text: '개발도상국에서도 모든 사람이 인터넷을 쓸 수 있도록 통신 기반 시설을 확대해요.' },
        ],
      },
      en: {
        overview:
          'Roads, bridges, schools, and the internet make our lives easier. This goal builds strong, reliable infrastructure and uses innovation to create better societies.',
        targets: [
          { id: '9.1', text: 'Develop quality, reliable, and sustainable infrastructure accessible to all.' },
          { id: '9.2', text: 'Promote inclusive and sustainable industrialization in all countries, with faster growth in developing countries.' },
          { id: '9.3', text: 'Increase small businesses\' access to financial services and markets.' },
          { id: '9.4', text: 'Upgrade infrastructure and retrofit industries to make them more sustainable and resource-efficient.' },
          { id: '9.5', text: 'Enhance scientific research and upgrade technological capabilities, especially in developing countries.' },
          { id: '9.c', text: 'Significantly increase access to information and communications technology in developing countries.' },
        ],
      },
      ja: {
        overview:
          '道路、橋、学校、インターネットなどのインフラは人々の生活を便利にします。この目標は、こうした施設を丈夫に作り、新しい技術でより良い社会を作ることです。',
        targets: [
          { id: '9.1', text: 'すべての人が利用しやすい道路、鉄道、港などの信頼できるインフラを整備します。' },
          { id: '9.2', text: 'すべての国が工場や産業を持続可能に発展させられるようにします。途上国にはより速い成長を支援します。' },
          { id: '9.3', text: '小さな企業もお金を借りたり投資を受けたりして事業を拡大できるようにします。' },
          { id: '9.4', text: '工場や産業が環境を汚染しない方法で運営されるよう改善します。' },
          { id: '9.5', text: '新しい技術の研究開発にもっと投資します。特に途上国の研究を支援します。' },
          { id: '9.c', text: '途上国でもすべての人がインターネットを使えるよう通信インフラを拡大します。' },
        ],
      },
    },
    10: {
      ko: {
        overview:
          '어떤 나라에서 태어났든, 어떤 환경이든 모두가 공평한 기회를 받아야 해요. 이 목표는 나라 안에서, 그리고 나라와 나라 사이의 불평등을 줄이는 거예요.',
        targets: [
          { id: '10.1', text: '가장 가난한 40%의 사람들의 소득이 나라 평균보다 더 빠르게 늘어날 수 있도록 해요.' },
          { id: '10.2', text: '나이, 성별, 장애, 인종, 출신에 관계없이 모든 사람이 사회와 경제에 참여할 수 있게 해요.' },
          { id: '10.3', text: '차별하는 법과 제도를 없애고, 모든 사람이 공평한 기회를 가질 수 있게 해요.' },
          { id: '10.4', text: '세금과 복지 정책으로 불평등을 줄이도록 해요.' },
          { id: '10.7', text: '다른 나라로 일자리를 찾아가는 이민자들이 안전하게, 제대로 된 대우를 받으며 이동할 수 있게 해요.' },
        ],
      },
      en: {
        overview:
          'No matter where you\'re born or what your background is, everyone deserves equal opportunities. This goal works to reduce inequality within countries and between them.',
        targets: [
          { id: '10.1', text: 'Ensure the income of the poorest 40% of the population grows faster than the national average.' },
          { id: '10.2', text: 'Promote social, economic, and political inclusion for everyone, regardless of age, gender, disability, or race.' },
          { id: '10.3', text: 'Eliminate discriminatory laws and policies, and ensure equal opportunities for everyone.' },
          { id: '10.4', text: 'Adopt fiscal, wage, and social protection policies to achieve greater equality.' },
          { id: '10.7', text: 'Ensure safe, orderly, and fair migration for people moving to other countries for work.' },
        ],
      },
      ja: {
        overview:
          'どの国に生まれても、どんな環境でも、すべての人が公平な機会を受けるべきです。この目標は、国内での、そして国と国の間の不平等を減らすことです。',
        targets: [
          { id: '10.1', text: '最も貧しい40%の人々の所得が国の平均よりも速く増えるようにします。' },
          { id: '10.2', text: '年齢、性別、障害、人種、出身に関わらず、すべての人が社会と経済に参加できるようにします。' },
          { id: '10.3', text: '差別的な法律や制度をなくし、すべての人が平等な機会を持てるようにします。' },
          { id: '10.4', text: '税制や福祉政策で不平等を減らします。' },
          { id: '10.7', text: '仕事を求めて他の国に移動する移民が安全に、きちんとした待遇を受けて移動できるようにします。' },
        ],
      },
    },
    11: {
      ko: {
        overview:
          '우리가 사는 도시와 마을이 안전하고 깨끗하며 모두가 살기 좋아야 해요. 이 목표는 지금 세대뿐 아니라 미래 세대도 살기 좋은 도시를 만드는 거예요.',
        targets: [
          { id: '11.1', text: '2030년까지 모든 사람이 안전하고 적정한 가격의 집에서 살 수 있게 해요.' },
          { id: '11.2', text: '모든 사람이 버스, 지하철, 자전거 도로 등 안전하고 편리한 교통수단을 이용할 수 있게 해요.' },
          { id: '11.4', text: '세계의 소중한 문화유산과 자연유산을 지켜요.' },
          { id: '11.5', text: '홍수, 태풍 같은 재난으로 목숨을 잃거나 집을 잃는 사람의 수를 크게 줄여요.' },
          { id: '11.6', text: '도시의 공기 오염과 쓰레기 문제를 줄여서 환경을 깨끗하게 해요.' },
          { id: '11.7', text: '모든 사람, 특히 어린이, 노인, 장애인이 녹지와 공공 공간을 이용할 수 있게 해요.' },
        ],
      },
      en: {
        overview:
          'Our cities and communities should be safe, clean, and good places for everyone. This goal creates cities that are great for people today and for future generations too.',
        targets: [
          { id: '11.1', text: 'Ensure everyone has access to safe and affordable housing by 2030.' },
          { id: '11.2', text: 'Provide everyone with safe and convenient transportation, including buses, trains, and bike lanes.' },
          { id: '11.4', text: 'Strengthen efforts to protect and safeguard the world\'s cultural and natural heritage.' },
          { id: '11.5', text: 'Significantly reduce deaths and losses from disasters like floods and storms.' },
          { id: '11.6', text: 'Reduce the adverse environmental impact of cities — improve air quality and waste management.' },
          { id: '11.7', text: 'Provide safe and accessible green spaces and public spaces for all, especially children and elderly people.' },
        ],
      },
      ja: {
        overview:
          '私たちが住む都市や町は、安全できれいで、みんなが住みやすい場所でなければなりません。この目標は、今の世代だけでなく、将来の世代も住みやすい都市を作ることです。',
        targets: [
          { id: '11.1', text: '2030年までに、すべての人が安全で手頃な価格の家に住めるようにします。' },
          { id: '11.2', text: 'すべての人がバス、地下鉄、自転車道などの安全で便利な交通手段を利用できるようにします。' },
          { id: '11.4', text: '世界の大切な文化遺産と自然遺産を守ります。' },
          { id: '11.5', text: '洪水、台風などの災害で命を失ったり家を失ったりする人の数を大幅に減らします。' },
          { id: '11.6', text: '都市の大気汚染とごみ問題を減らして環境をきれいにします。' },
          { id: '11.7', text: 'すべての人、特に子ども、お年寄り、障害者が緑地や公共スペースを利用できるようにします。' },
        ],
      },
    },
    12: {
      ko: {
        overview:
          '우리가 물건을 너무 많이 사거나 버리면 지구가 힘들어져요. 이 목표는 필요한 만큼만 쓰고, 물건을 만들 때도 환경을 생각하도록 하는 거예요.',
        targets: [
          { id: '12.2', text: '자연에서 얻는 자원을 낭비 없이 지속가능하게 관리하고 사용해요.' },
          { id: '12.3', text: '2030년까지 전 세계적으로 음식 쓰레기를 절반으로 줄여요.' },
          { id: '12.4', text: '화학물질과 쓰레기를 환경에 해를 주지 않도록 안전하게 처리해요.' },
          { id: '12.5', text: '재활용과 재사용을 통해 버려지는 쓰레기의 양을 크게 줄여요.' },
          { id: '12.6', text: '기업들이 지속가능한 방법으로 사업을 하도록 장려해요.' },
          { id: '12.8', text: '모든 사람이 지속가능한 생활 방식이 무엇인지 알고 실천할 수 있도록 가르쳐요.' },
        ],
      },
      en: {
        overview:
          'Buying and throwing away too many things harms our planet. This goal encourages everyone to use only what they need and to produce goods in ways that protect the environment.',
        targets: [
          { id: '12.2', text: 'Achieve sustainable management and efficient use of natural resources.' },
          { id: '12.3', text: 'Halve per capita global food waste at the retail and consumer level by 2030.' },
          { id: '12.4', text: 'Achieve environmentally sound management of chemicals and all wastes.' },
          { id: '12.5', text: 'Substantially reduce waste generation through prevention, reduction, recycling, and reuse.' },
          { id: '12.6', text: 'Encourage companies to adopt sustainable business practices.' },
          { id: '12.8', text: 'Ensure all people have information and awareness for sustainable development and lifestyles.' },
        ],
      },
      ja: {
        overview:
          'ものを買いすぎたり捨てすぎたりすると地球が苦しくなります。この目標は、必要な分だけ使い、ものを作るときも環境を考えるようにすることです。',
        targets: [
          { id: '12.2', text: '自然から得られる資源を無駄なく持続可能に管理・使用します。' },
          { id: '12.3', text: '2030年までに世界全体の食品廃棄物を半分に減らします。' },
          { id: '12.4', text: '化学物質やゴミを環境に害を与えないよう安全に処理します。' },
          { id: '12.5', text: 'リサイクルや再利用により、廃棄されるゴミの量を大幅に減らします。' },
          { id: '12.6', text: '企業が持続可能な方法でビジネスを行うよう促します。' },
          { id: '12.8', text: 'すべての人が持続可能なライフスタイルとは何かを知り、実践できるよう教えます。' },
        ],
      },
    },
    13: {
      ko: {
        overview:
          '지구가 점점 뜨거워지면서 폭풍, 홍수, 가뭄이 더 자주 일어나고 있어요. 이 목표는 기후변화를 막기 위해 모든 나라가 함께 빠르게 행동하는 거예요.',
        targets: [
          { id: '13.1', text: '모든 나라, 특히 가난한 나라들이 기후 재난(폭풍, 홍수 등)에 잘 대비하고 견딜 수 있도록 해요.' },
          { id: '13.2', text: '기후변화에 대응하는 방법을 나라의 여러 정책과 계획에 포함시켜요.' },
          { id: '13.3', text: '기후변화가 무엇인지, 어떻게 해결할 수 있는지 학교와 사회에서 가르쳐요.' },
        ],
      },
      en: {
        overview:
          'Our planet is getting warmer, causing more storms, floods, and droughts. This goal requires all countries to take urgent action together to fight climate change.',
        targets: [
          { id: '13.1', text: 'Strengthen resilience and ability to adapt to climate-related disasters in all countries.' },
          { id: '13.2', text: 'Integrate climate change measures into national policies, strategies, and planning.' },
          { id: '13.3', text: 'Improve education, awareness, and action on climate change for all people.' },
        ],
      },
      ja: {
        overview:
          '地球がどんどん暑くなり、嵐、洪水、干ばつが増えています。この目標は、すべての国が協力して気候変動に対処するために迅速に行動することです。',
        targets: [
          { id: '13.1', text: 'すべての国、特に貧しい国々が気候災害（嵐、洪水など）に十分備え、耐えられるようにします。' },
          { id: '13.2', text: '気候変動への対応策を国の様々な政策や計画に組み込みます。' },
          { id: '13.3', text: '気候変動とは何か、どう解決できるかを学校や社会で教えます。' },
        ],
      },
    },
    14: {
      ko: {
        overview:
          '바다는 지구의 70% 이상을 차지하고 수많은 생물의 집이에요. 이 목표는 바다를 오염에서 보호하고, 물고기와 바다 생물들이 건강하게 살 수 있도록 하는 거예요.',
        targets: [
          { id: '14.1', text: '2025년까지 바다에 버려지는 쓰레기와 오염 물질을 크게 줄여요.' },
          { id: '14.2', text: '바다와 해안 생태계를 건강하게 보호하고 복원해요.' },
          { id: '14.3', text: '바닷물이 산성화되는 문제를 최소화하고 그 영향을 해결해요.' },
          { id: '14.4', text: '물고기를 너무 많이 잡는 남획을 막고, 어류가 충분히 회복될 수 있도록 해요.' },
          { id: '14.5', text: '2020년까지 바다의 최소 10%를 보호 구역으로 지정해요.' },
        ],
      },
      en: {
        overview:
          'Oceans cover more than 70% of our planet and are home to millions of creatures. This goal protects our oceans from pollution and ensures marine life can thrive.',
        targets: [
          { id: '14.1', text: 'Significantly reduce marine pollution, including plastic waste, by 2025.' },
          { id: '14.2', text: 'Sustainably manage and protect marine and coastal ecosystems.' },
          { id: '14.3', text: 'Minimize and address the impacts of ocean acidification.' },
          { id: '14.4', text: 'Effectively regulate harvesting and end overfishing to restore fish stocks.' },
          { id: '14.5', text: 'Protect at least 10% of coastal and marine areas by 2020.' },
        ],
      },
      ja: {
        overview:
          '海は地球の70%以上を占め、無数の生き物の家です。この目標は、海を汚染から守り、魚や海の生き物が健康に暮らせるようにすることです。',
        targets: [
          { id: '14.1', text: '2025年までに海に捨てられるゴミや汚染物質を大幅に減らします。' },
          { id: '14.2', text: '海と沿岸の生態系を健全に保護・回復します。' },
          { id: '14.3', text: '海の酸性化の問題を最小限に抑え、その影響に対処します。' },
          { id: '14.4', text: '魚を獲りすぎる乱獲を防ぎ、魚の個体数が十分に回復できるようにします。' },
          { id: '14.5', text: '2020年までに海の少なくとも10%を保護区に指定します。' },
        ],
      },
    },
    15: {
      ko: {
        overview:
          '숲과 산, 습지에는 수많은 동물과 식물이 살고 있어요. 이 목표는 이런 육지의 자연을 보호하고, 사막화를 막아 다양한 생물들이 함께 살 수 있게 하는 거예요.',
        targets: [
          { id: '15.1', text: '2020년까지 육지와 민물 생태계(강, 호수, 습지)를 보전하고 복원해요.' },
          { id: '15.2', text: '2020년까지 숲을 지속가능하게 관리하고, 산림 파괴를 막고 황폐해진 숲을 되살려요.' },
          { id: '15.3', text: '2030년까지 토지가 사막으로 변하는 것을 막고, 이미 황폐해진 땅을 회복시켜요.' },
          { id: '15.5', text: '동식물이 살아가는 서식지가 파괴되는 것을 막고, 멸종 위기에 처한 생물들을 보호해요.' },
          { id: '15.7', text: '불법으로 동물을 잡거나 거래하는 밀렵과 불법 야생동물 거래를 막아요.' },
          { id: '15.8', text: '다른 곳에서 들어온 생물(침입 외래종)이 생태계를 망가뜨리는 것을 막아요.' },
        ],
      },
      en: {
        overview:
          'Forests, mountains, and wetlands are home to millions of animals and plants. This goal protects nature on land, stops desertification, and helps all kinds of life coexist.',
        targets: [
          { id: '15.1', text: 'Ensure the conservation and restoration of terrestrial and freshwater ecosystems by 2020.' },
          { id: '15.2', text: 'Promote sustainable forest management and halt deforestation by 2020.' },
          { id: '15.3', text: 'Combat desertification and restore degraded land and soil by 2030.' },
          { id: '15.5', text: 'Take urgent action to reduce the degradation of natural habitats and prevent the extinction of threatened species.' },
          { id: '15.7', text: 'Take urgent action to end poaching and trafficking of protected flora and fauna.' },
          { id: '15.8', text: 'Introduce measures to prevent the introduction and reduce the impact of invasive alien species.' },
        ],
      },
      ja: {
        overview:
          '森、山、湿地には無数の動物や植物が住んでいます。この目標は、陸地の自然を守り、砂漠化を防ぎ、多様な生き物が共存できるようにすることです。',
        targets: [
          { id: '15.1', text: '2020年までに陸地と淡水の生態系（川、湖、湿地）を保全・回復します。' },
          { id: '15.2', text: '2020年までに森林を持続可能に管理し、森林破壊を防ぎ、荒廃した森林を再生します。' },
          { id: '15.3', text: '2030年までに土地が砂漠に変わるのを防ぎ、すでに荒廃した土地を回復させます。' },
          { id: '15.5', text: '動植物が住む生息地が破壊されるのを防ぎ、絶滅の危機にある生き物を保護します。' },
          { id: '15.7', text: '違法に動物を捕まえたり売買したりする密猟と不法野生動物取引を防ぎます。' },
          { id: '15.8', text: '侵略的外来種（他から来た生き物）が生態系を壊すのを防ぎます。' },
        ],
      },
    },
    16: {
      ko: {
        overview:
          '전쟁과 폭력 없이 서로를 존중하며 사는 세상이 필요해요. 이 목표는 모두가 법의 보호를 받고, 정직하고 투명한 정부 아래 평화롭게 사는 사회를 만드는 거예요.',
        targets: [
          { id: '16.1', text: '모든 곳에서 폭력과 그로 인한 사망을 크게 줄여요.' },
          { id: '16.2', text: '어린이에 대한 학대, 인신매매, 고문을 완전히 없애요.' },
          { id: '16.3', text: '법이 공평하게 적용되고, 모든 사람이 법의 보호를 받을 수 있게 해요.' },
          { id: '16.5', text: '정부와 관련 기관에서 뇌물과 부패를 크게 줄여요.' },
          { id: '16.6', text: '나라를 책임감 있고 투명하게 운영하는 정부와 기관을 만들어요.' },
          { id: '16.9', text: '2030년까지 모든 사람이 출생 신고 등 법적인 신분증을 가질 수 있게 해요.' },
          { id: '16.10', text: '정보에 접근할 권리를 보호하고, 언론의 자유 등 기본적인 자유를 지켜요.' },
        ],
      },
      en: {
        overview:
          'We need a world where people live without war or violence, respecting each other. This goal builds peaceful societies where everyone is protected by fair laws and honest governments.',
        targets: [
          { id: '16.1', text: 'Significantly reduce all forms of violence and related deaths everywhere.' },
          { id: '16.2', text: 'End abuse, exploitation, trafficking, and all forms of violence against and torture of children.' },
          { id: '16.3', text: 'Promote the rule of law and ensure equal access to justice for all.' },
          { id: '16.5', text: 'Substantially reduce corruption and bribery in all their forms.' },
          { id: '16.6', text: 'Develop effective, accountable, and transparent institutions at all levels.' },
          { id: '16.9', text: 'Provide legal identity for all, including birth registration, by 2030.' },
          { id: '16.10', text: 'Ensure public access to information and protect fundamental freedoms.' },
        ],
      },
      ja: {
        overview:
          '戦争や暴力なく、互いを尊重して生きる世界が必要です。この目標は、すべての人が公平な法律と誠実な政府に守られて、平和に暮らす社会を作ることです。',
        targets: [
          { id: '16.1', text: 'あらゆる場所で暴力とそれによる死亡を大幅に減らします。' },
          { id: '16.2', text: '子どもへの虐待、人身売買、拷問をなくします。' },
          { id: '16.3', text: '法律が公平に適用され、すべての人が法の保護を受けられるようにします。' },
          { id: '16.5', text: '政府と関連機関での汚職と贈収賄を大幅に減らします。' },
          { id: '16.6', text: '責任感があり透明性の高い政府と機関を作ります。' },
          { id: '16.9', text: '2030年までに、すべての人が出生届などの法的な身分証明書を持てるようにします。' },
          { id: '16.10', text: '情報にアクセスする権利を守り、報道の自由などの基本的自由を保障します。' },
        ],
      },
    },
    17: {
      ko: {
        overview:
          '17가지 SDGs를 달성하려면 어느 나라 혼자서는 할 수 없어요. 이 목표는 전 세계 나라, 기업, 시민들이 서로 협력해서 함께 더 나은 세상을 만드는 거예요.',
        targets: [
          { id: '17.1', text: '나라마다 세금을 잘 걷어서 스스로 개발 계획을 실행할 수 있는 능력을 키워요.' },
          { id: '17.2', text: '선진국들이 개발도상국을 돕기 위한 원조를 약속대로 계속 이행해요.' },
          { id: '17.6', text: '나라 간 과학기술 협력과 지식 공유를 늘려요. 특히 개발도상국이 기술을 더 쉽게 이용할 수 있게 해요.' },
          { id: '17.10', text: '모든 나라가 공평하게 무역할 수 있는 규칙 기반의 무역 시스템을 강화해요.' },
          { id: '17.16', text: '지속가능발전 목표 달성을 위해 전 세계 파트너십을 강화하고, 여러 이해관계자들이 함께 노력해요.' },
          { id: '17.17', text: '기업, 정부, 시민단체가 함께 협력하는 파트너십을 장려하고 지원해요.' },
          { id: '17.19', text: '경제 성장 외에 사람들의 삶의 질을 측정하는 새로운 방법을 개발해요.' },
        ],
      },
      en: {
        overview:
          'No single country can achieve all 17 SDGs alone. This goal brings together countries, businesses, and people worldwide to cooperate and build a better world.',
        targets: [
          { id: '17.1', text: 'Strengthen each country\'s ability to collect taxes and fund their own development.' },
          { id: '17.2', text: 'Ensure developed countries fulfill their aid commitments to developing countries.' },
          { id: '17.6', text: 'Enhance international cooperation on science, technology, and innovation.' },
          { id: '17.10', text: 'Promote a universal, rules-based, open, non-discriminatory and equitable multilateral trading system.' },
          { id: '17.16', text: 'Enhance the Global Partnership for Sustainable Development, bringing together multiple stakeholders.' },
          { id: '17.17', text: 'Encourage and promote effective public, public-private, and civil society partnerships.' },
          { id: '17.19', text: 'Build on existing initiatives to develop better measurements of progress beyond GDP.' },
        ],
      },
      ja: {
        overview:
          '17のSDGsを達成するためには、どの国も一人ではできません。この目標は、世界中の国、企業、市民が協力してより良い世界を作ることです。',
        targets: [
          { id: '17.1', text: '各国が税収をきちんと確保し、自ら開発計画を実行できる力をつけます。' },
          { id: '17.2', text: '先進国が途上国を支援するための援助を約束通り継続して実施します。' },
          { id: '17.6', text: '国際間の科学技術協力と知識共有を増やします。特に途上国が技術をより簡単に利用できるようにします。' },
          { id: '17.10', text: 'すべての国が公平に貿易できるルールに基づく多角的貿易システムを強化します。' },
          { id: '17.16', text: '持続可能な開発のための世界的なパートナーシップを強化し、様々なステークホルダーが共に取り組みます。' },
          { id: '17.17', text: '企業、政府、市民団体が協力するパートナーシップを奨励・支援します。' },
          { id: '17.19', text: '経済成長以外に、人々の生活の質を測る新しい方法を開発します。' },
        ],
      },
    },
  },
};

export default SDG_DICTIONARY;
