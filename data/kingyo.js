// 2023/01/29 更新
const list = [
  "?",
  "……",
  "……ｼﾃ……ｺﾛｼﾃ……",
  "ｨﾔﾎｰ",
  "ｩｭ",
  "ｫｪｰ",
  "ｫﾝ",
  "ｬﾜｬﾜｬﾜ~",
  "ｰ",
  "ｱ",
  "ｱ!!!!!!!!!!!!!!!!!!!!",
  "ｱ--",
  "ｱ----",
  "ｱ----.?!!!---??",
  "ｱ~",
  "ｱ~~~~~~~~~~~~~~~~~~",
  "ｱ…ﾂ…",
  "ｱ゜−‼︎",
  "ｱｰ",
  "ｱｰ!!!!!!",
  "ｱｰ&ｳｰ",
  "ｱｰﾝ",
  "ｱｳｰ",
  "ｱｳｱｳ",
  "ｱｳｱｳ…",
  "ｱｳｱｳｱｳｱｰ",
  "ｱｴｰ",
  "ｱｴﾔｴﾔｴ",
  "ｱｵﾜﾜﾜﾜﾜ",
  "ｱｺﾞｱｺﾞ!!",
  "ｱﾁｱﾁ",
  "ｱﾂ",
  "ｱﾂｲﾖ~",
  "ｱﾆｬｰ",
  "ｱﾊﾞ-------!!",
  "ｱﾊﾞｰ",
  "ｱﾊﾟ",
  "ｱﾊﾟ…",
  "ｱﾊﾟﾊﾟ…",
  "ｱﾋﾞｬ---",
  "ｱﾒﾎﾃﾌﾟ",
  "ｱﾔｰ",
  "ｱﾔﾔ",
  "ｱﾜ~",
  "ｱﾜ~~~",
  "ｱﾜｰ",
  "ｱﾜｰｰｰｰｰ",
  "ｱﾜｱﾜﾕﾆﾊﾞ~ｽ",
  "ｱﾜﾜﾉﾜ",
  "ｱﾜﾜﾜﾜ ｱﾜﾜﾜﾜﾜﾜ ｱﾜﾜﾜﾜ",
  "ｲｪｲ",
  "ｲｪｲｲｪ",
  "ｲｪｲｲｪｲ",
  "ｲｪｲｲｪｲ!",
  "ｲｪｲｲｴｲ",
  "ｲｬｰｯ",
  "ｲｰｯ",
  "ｲｲﾖ~",
  "ｲｶｲｶ",
  "ｲｿﾍﾞﾓﾁ",
  "ｲﾔｯ",
  "ｲﾔｰｯ",
  "ｲﾔｰｯ!",
  "ｲﾝﾀｰﾈｯﾄ",
  "ｳ",
  "ｳ-ｯ",
  "ｳ-ﾊﾟ-ﾙ-ﾊﾟ-ｽ-ﾊﾟ-ｶ-",
  "ｳｪ…",
  "ｳｪｯ ｳｪｯ",
  "ｳｪｰ",
  "ｳｪﾝｻﾞﾅｲ♪",
  "ｳｫｰｰｰｰｰｰｰｰｰｰﾝ",
  "ｳｫｳｳｫ",
  "ｳｫｳｵｳｳｫ",
  "ｳｫｴ",
  "ｳｫｵｵｵｵｵ",
  "ｳｭｭｭｭ",
  "ｳｰｯ!",
  "ｳｰﾎﾟﾖ",
  "ｳｰﾝ",
  "ｳｳｳﾕｳﾕｳﾕ…",
  "ｳｳﾜﾜｳｱ",
  "ｳｵ-ｯ",
  "ｳｵｰ",
  "ｳｵｳｵ",
  "ｳｷﾞｬｰｯ",
  "ｳｺﾞ…ｳｺﾞ…",
  "ｳｺﾞｳｺﾞ",
  "ｳｺﾞｳｺﾞｳｺﾞｳｺﾞ",
  "ｳｺﾞｺﾞ",
  "ｳﾅｰｯ",
  "ｳﾅｳﾅ",
  "ｳﾅｷﾞｲﾇ",
  "ｳﾆ",
  "ｳﾆｬ",
  "ｳﾆｬｳﾆｬ",
  "ｳﾆｬｳﾆｬｳ",
  "ｳﾆｬｳﾆｬｳﾆｬ",
  "ｳﾆｬﾗﾋﾟｬｯﾄ",
  "ｳﾆｬﾗﾗﾗ",
  "ｳﾆｮ",
  "ｳﾆｮ…",
  "ｳﾆｮｳﾆｮ",
  "ｳﾆｰｯ",
  "ｳﾆｳﾆﾊﾟﾆｯｸ",
  "ｳﾆｸﾗｹﾞ",
  "ｳﾆﾔｳﾆﾔ",
  "ｳﾇﾇﾇ",
  "ｳﾈｳﾈ",
  "ｳﾌﾌ",
  "ｳﾌﾌ…",
  "ｳﾑ",
  "ｳﾔｳﾔ",
  "ｳﾖｳﾖｳﾖ…",
  "ｳﾚｼ~",
  "ｳﾜｰ!",
  "ｳﾜﾊﾊﾊ",
  "ｳﾝ!",
  "ｳﾝﾀﾞﾊﾞ",
  "ｳﾞｧｰｯ",
  "ｳﾞｪ",
  "ｳﾞｰｯ",
  "ｴｰ",
  "ｴｰ?",
  "ｴｰﾝ",
  "ｴｰﾝ…",
  "ｴｰﾝｴｰﾝ",
  "ｴｰﾝｴﾝ",
  "ｴｲﾔｯ",
  "ｴﾓｴﾓ",
  "ｴﾗｰ",
  "ｴﾝｴﾝ",
  "ｵｬ",
  "ｵｰﾝｵﾝ",
  "ｵｱ",
  "ｵｱ-ｯﾏﾃﾅﾅｶﾅﾅｶﾔｶﾕｿ",
  "ｵｱｱｱｱ ｵｱｱｱｱｱｱ ｵｱｱｱｱ",
  "ｵｲｵｲｵｲｵｲ",
  "ｵｲﾁｲ",
  "ｵｴ",
  "ｵｴｰ",
  "ｵｴｴ…",
  "ｵｵｰ",
  "ｵｷﾞｬ…",
  "ｵｷﾞｬｰ",
  "ｵｷﾞｬｵ",
  "ｵｷﾞｬﾝ",
  "ｵｹﾞｰ",
  "ｵｹﾞｹﾞ",
  "ｵﾅｶｽｷｰ",
  "ｵﾈﾑﾀﾞﾔ",
  "ｵﾈﾑﾔﾖ",
  "ｵﾈﾑﾖｫ",
  "ｵﾊｰﾔ",
  "ｵﾊﾖ~",
  "ｵﾊﾖｰｯ",
  "ｵﾊﾚｲﾜ~",
  "ｵﾊﾞｰ",
  "ｵﾊﾞﾊﾞﾊﾞﾖ",
  "ｵﾊﾞﾊﾞﾎﾞ",
  "ｵﾎﾞﾎﾞﾎﾞ…",
  "ｵﾘｬ-…",
  "ｵﾘｬｯ",
  "ｵﾛﾛ",
  "ｵﾜ-ｯ!! ﾄﾞｩﾙﾝﾄﾞｩﾙﾝﾄﾞｩﾙﾝ",
  "ｵﾜ~",
  "ｵﾜ~~~~~~~~~",
  "ｵﾜｰ",
  "ｵﾜｰ!",
  "ｵﾜｵﾜﾜ",
  "ｵﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜ",
  "ｶｰ",
  "ｶｽ",
  "ｶﾄﾞ!",
  "ｶﾄﾞ…",
  "ｶﾄﾞｶﾄﾞ!!",
  "ｶﾅｶﾅｶﾅ…",
  "ｶﾆ",
  "ｶﾆ ﾆｸ ｸﾆ ﾆｽ ｽｼ ｼｶ ｶﾆ",
  "ｶﾆｯ",
  "ｶﾆｰｯ",
  "ｶﾆｰﾆ",
  "ｶﾆｶ-ﾆﾊﾞﾙ",
  "ｶﾆｶﾆ",
  "ｶﾆｶﾆｶﾆ…",
  "ｶﾆﾁｬﾊ",
  "ｶﾆﾁｬﾊ!",
  "ｶﾋﾟｶﾋﾟ",
  "ｶﾌﾟｶﾌﾟ",
  "ｶﾌﾟﾒﾝ",
  "ｶﾍﾟﾍﾟ",
  "ｶﾍﾟﾗ",
  "ｶﾎﾟ",
  "ｶﾎﾟﾎﾟ",
  "ｶﾎﾟﾎﾟﾎﾟﾎﾟ",
  "ｶﾗｵｹ…ｶ…",
  "ｶﾗｵｹｲｷﾃｰ",
  "ｶﾜｲｰｯ!!",
  "ｶﾞ",
  "ｶﾞﾁｬ",
  "ｶﾞﾄﾘﾝｸﾞｶﾞﾆ",
  "ｶﾞﾝﾀﾞﾑﾀﾞﾑ",
  "ｷ゜ｰ",
  "ｷｬｯｷｬｯ",
  "ｷｬｰ",
  "ｷｭﾋﾟｰ",
  "ｷｮﾑ…",
  "ｷｮﾜ-",
  "ｷｮﾜ-ﾜ",
  "ｷｮﾜｰ",
  "ｷｰｯ!",
  "ｷｰｼｨ ﾕﾘｹﾞﾗｰ ﾕﾘｷﾝｸﾞ",
  "ｷｴｰｯ",
  "ｷﾓ",
  "ｷﾝｷﾞｮ",
  "ｷﾞｬｲｷﾞｬｲ",
  "ｷﾞｬﾊﾊ!!",
  "ｷﾞｬﾋﾟｷﾞｬﾋﾞ",
  "ｷﾞｬﾎﾞ",
  "ｷﾞｬﾎﾞ~~~~~~~~~~~~~~~~~~~",
  "ｷﾞｬﾎﾞｰ",
  "ｷﾞｬﾎﾞﾘ",
  "ｷﾞｮ…",
  "ｷﾞｮｴｰ",
  "ｷﾞｮｴﾋﾟｰ",
  "ｷﾞｮﾃ",
  "ｷﾞｮﾜ",
  "ｷﾞｴ",
  "ｷﾞｷﾞｷﾞｷﾞ",
  "ｸｿﾀﾞﾘｨ",
  "ｸｿﾃﾞｶﾚｲﾝﾎﾞｩ",
  "ｸﾀﾀ",
  "ｸﾞｩ",
  "ｸﾞｪｵ",
  "ｸﾞｰ",
  "ｸﾞｰｯ",
  "ｸﾞｲｰ",
  "ｸﾞｴｰ",
  "ｹﾞﾄﾜｲｴﾝﾀﾌ",
  "ｹﾞﾎﾞ-",
  "ｹﾞﾎﾞﾁｮ",
  "ｺｬﾍﾟ",
  "ｺｬﾎﾟﾎﾟﾎﾟ",
  "ｺｹｰｯ",
  "ｺｹｰｰｰｰｰｯ‼︎",
  "ｺｼｰｯ",
  "ｺﾑ",
  "ｺﾛｼﾃ…ｺﾛｼﾃ…",
  "ｺﾝﾊﾞｲﾝ",
  "ｺﾝﾊﾟ-ｽ ｵﾌﾞ ﾕｱ ﾊ~~~ﾄ",
  "ｺﾞｮﾐ",
  "ｺﾞｺﾞｺﾞｳｫｰ",
  "ｺﾞﾊﾝｺﾞﾊﾝ…",
  "ｻｷﾞｮｰ",
  "ｻｷﾞｮｲﾌﾟ",
  "ｻｷﾞｮｲﾌﾟ…",
  "ｻｻｻｻｻｻｻﾑｽｷﾞ",
  "ｻﾐｰｯ",
  "ｻﾑ",
  "ｻﾑｲﾖ~",
  "ｻﾑｽ",
  "ｼｭ",
  "ｼｭ~…",
  "ｼｭﾝ…",
  "ｼｮﾎﾞﾎﾞ…",
  "ｼｸｼｸ",
  "ｼｺﾞｵﾜ",
  "ｼｺﾞﾜ",
  "ｼﾞｬｶﾞｼﾞｬｶﾞｼﾞｬｶﾞ~",
  "ｼﾞｭﾜ~",
  "ｽｬ",
  "ｽｰｯ",
  "ｽｼ",
  "ｽｼﾝﾙﾙ",
  "ｽﾊﾟｽﾊﾟｽﾊﾟｼｰﾊﾞ",
  "ｽﾍﾟﾋﾟﾎﾟ~",
  "ｽﾔｽﾔ",
  "ｽﾔﾘ",
  "ｽﾔﾘｺ",
  "ｽﾝ…",
  "ｽﾞﾝﾁｬｽﾞﾝﾁｬ",
  "ｾｲｾｲｯ",
  "ｿｧ",
  "ｿｶｶｶｶ",
  "ｿﾘ",
  "ｿﾘﾈ",
  "ﾀｶﾗﾄﾐｰ",
  "ﾀｽｹﾃ…ﾀｽｹﾃ…",
  "ﾀﾀﾞｲﾏｰ",
  "ﾀﾀﾞｲﾏｰ!",
  "ﾀﾞﾘｰ",
  "ﾀﾞﾚｶｰｯ",
  "ﾁｪｿ",
  "ﾁｬｰﾊﾝ",
  "ﾁｬﾊｰﾝ",
  "ﾁｭﾝﾁｭﾝ",
  "ﾁｶﾚﾀﾈ",
  "ﾂｫｰ",
  "ﾂｶﾚﾀﾋﾟ",
  "ﾃｨﾛﾘﾃｨﾛﾘ",
  "ﾃﾞｽﾏｰﾁ",
  "ﾄｰﾌ",
  "ﾄﾍﾟﾍﾟ",
  "ﾄﾞｩﾜｰ",
  "ﾄﾞｳ  ｼﾃ",
  "ﾄﾞｳｼﾃ…",
  "ﾅｰ",
  "ﾅｰﾅｰﾅｰ",
  "ﾅﾝﾓｼﾀｸﾅｱ",
  "ﾅﾝﾓｼﾀｸﾈ",
  "ﾆ",
  "ﾆｬ------------ﾝ",
  "ﾆｬ-ﾝ",
  "ﾆｬｰｿ",
  "ﾆｬｰﾝ…",
  "ﾆｬｵｰｯ",
  "ﾆｬﾑﾆｬﾑ",
  "ﾆｬﾜ-ﾝ",
  "ﾆｬﾜｰ",
  "ﾆｬﾜｰｰﾝ",
  "ﾆｬﾜﾝ",
  "ﾆｮ",
  "ﾆｮｯﾜ~~~",
  "ﾆｮﾎﾎ",
  "ﾆｮﾔｰ",
  "ﾆｮﾘ",
  "ﾆｮﾛ",
  "ﾆｮﾜ~",
  "ﾆｮﾜｰ",
  "ﾆｮﾜｰｰﾝ",
  "ﾆｮﾜﾆｮﾜﾆｮﾜ",
  "ﾆｮﾜﾜﾜﾜ~",
  "ﾆｮﾜﾜﾜﾜﾜ",
  "ﾆｺ!",
  "ﾆｺ…",
  "ﾆｺｰｯ",
  "ﾆｺﾆｺ!",
  "ﾇ",
  "ﾇ…",
  "ﾇｧ",
  "ﾇｮｰ",
  "ﾇｰ",
  "ﾇｱｯ",
  "ﾇｱｰ",
  "ﾇｲﾇｲ",
  "ﾇｵｰ",
  "ﾇﾅﾑ",
  "ﾇﾇﾇｰﾇﾇｰﾇﾇ",
  "ﾇﾎﾞｰ",
  "ﾇﾝ",
  "ﾈ",
  "ﾈﾅｷｬﾈ−",
  "ﾈﾇ",
  "ﾈﾈﾈﾈﾈﾑ",
  "ﾈﾐ",
  "ﾈﾐ…ﾈﾐ…",
  "ﾈﾐﾖ",
  "ﾈﾑ",
  "ﾈﾑ……ﾈﾑ……",
  "ﾈﾑｰ",
  "ﾈﾑｲﾊﾗﾍﾀ",
  "ﾈﾑｲﾖｰ",
  "ﾈﾑｼﾞｬ",
  "ﾈﾑﾈﾑ",
  "ﾈﾑﾈﾑmountain",
  "ﾈﾑﾈﾑﾈﾑ",
  "ﾈﾑﾔ",
  "ﾈﾝﾑﾝﾐ!",
  "ﾉｬﾜﾝ",
  "ﾉﾜｰｰｰｰ",
  "ﾊ~",
  "ﾊｯﾋﾟ~",
  "ﾊｱ……ﾊｱ……",
  "ﾊｱ…ﾊｱ…",
  "ﾊｱﾊｱ",
  "ﾊｱﾊｱ……",
  "ﾊﾋｰ",
  "ﾊﾔ~",
  "ﾊﾔｵｷ",
  "ﾊﾖﾈﾖﾈ-",
  "ﾊﾗﾍ",
  "ﾊﾗﾍﾘ",
  "ﾊﾗﾍﾘﾈﾑ",
  "ﾊﾙｷｹﾞﾆｱ",
  "ﾊﾜ",
  "ﾊﾜ~",
  "ﾊﾜ…",
  "ﾊﾞﾇｱﾂ",
  "ﾊﾞﾌﾞﾊﾞﾌﾞ…",
  "ﾊﾞﾎｰ",
  "ﾊﾞﾝﾊﾞﾝﾊﾞﾁｷﾁｷﾊﾞﾝﾊﾞﾝ♪",
  "ﾊﾟ-",
  "ﾊﾟｵﾊﾟｵ~",
  "ﾊﾟｵﾝ",
  "ﾊﾟｷｬｰ",
  "ﾊﾟｸﾊﾟｸ",
  "ﾊﾟﾋ",
  "ﾊﾟﾋﾊﾟﾋ",
  "ﾊﾟﾎﾟｰ",
  "ﾊﾟﾐ",
  "ﾊﾟﾔ",
  "ﾊﾟﾝｹｷ",
  "ﾋｪｰｯ",
  "ﾋｮﾎﾎ",
  "ﾋｮﾜﾜﾖﾌｨ~",
  "ﾋｲﾋｲ",
  "ﾋｴ…",
  "ﾋﾞ",
  "ﾋﾞｰｯ",
  "ﾋﾟ",
  "ﾋﾟ-------",
  "ﾋﾟ-ﾋｮﾛﾋﾟ-",
  "ﾋﾟｬ",
  "ﾋﾟｬﾋﾟｬ",
  "ﾋﾟｮ",
  "ﾋﾟｮ-",
  "ﾋﾟｮｰｯﾋﾟﾖﾋﾟﾖﾋﾟﾖ",
  "ﾋﾟｯ",
  "ﾋﾟｰｰｰｰｰｰｰｰｰｰﾎﾟ",
  "ﾋﾟｰｽﾋﾟｰｽ",
  "ﾋﾟｰﾖ",
  "ﾋﾟｴ~",
  "ﾋﾟｷｰ",
  "ﾋﾟﾋﾟｰｯ‼︎",
  "ﾋﾟﾔｰ",
  "ﾋﾟﾖ~",
  "ﾋﾟﾖﾋﾟﾖ",
  "ﾋﾟﾖﾋﾟﾖﾋﾟｰﾖ",
  "ﾋﾟﾖﾋﾟﾖﾖｰ",
  "ﾋﾟﾖﾝ",
  "ﾌｧｲﾔｰｯ",
  "ﾌｧﾅ~",
  "ﾌｨｰ",
  "ﾌｫﾝﾌｫﾝﾌｫﾝﾌｫﾝ",
  "ﾌｫﾝﾌﾞﾗｳﾝ",
  "ﾌｲｰ",
  "ﾌｸﾌｸﾏﾒﾀﾞｲﾌｸ",
  "ﾌﾄﾝ・ｲﾝ",
  "ﾌﾅｰ",
  "ﾌﾆｬ",
  "ﾌﾆｬ~",
  "ﾌﾆｬﾌﾆｬ",
  "ﾌﾆｬﾔﾗ",
  "ﾌﾈﾈ",
  "ﾌﾌ…",
  "ﾌﾌﾝﾌﾌ",
  "ﾌﾖﾌﾖﾌﾖ…",
  "ﾌﾖﾖ~",
  "ﾌﾘﾀﾞ",
  "ﾌﾜｰ",
  "ﾌﾜﾌﾜ~",
  "ﾌﾝｽ",
  "ﾌﾞｧｰ",
  "ﾌﾞｸﾌﾞｸﾌﾞｸ…",
  "ﾌﾟｲﾌﾟｲ",
  "ﾌﾟｽｰ",
  "ﾌﾟﾐ",
  "ﾍｲﾍｲ",
  "ﾍｹｯ",
  "ﾍｹｯ!!",
  "ﾍﾄﾄ",
  "ﾍﾄﾍﾄ",
  "ﾍﾛﾍﾛﾋﾟｰﾅﾂ",
  "ﾍﾞｼﾞﾀﾎﾞ",
  "ﾍﾞﾁｬ",
  "ﾍﾟｲﾍﾟｲ",
  "ﾍﾟｹﾍﾟｹﾎﾟﾝﾎﾟﾝ",
  "ﾍﾟｼｬ",
  "ﾍﾟﾌ",
  "ﾍﾟﾐ",
  "ﾍﾟﾔ",
  "ﾎ---ﾍ",
  "ﾎ~ ﾎｹｷｮ",
  "ﾎｰﾎｹｷｮ",
  "ﾎｱ~?",
  "ﾎｱｰｯ",
  "ﾎｴ",
  "ﾎｷｬ",
  "ﾎｷｬｰｯﾎｷｬｷｬｷｬｷｬ",
  "ﾎｷｬｷｬ",
  "ﾎｷｷｷｷ",
  "ﾎｷﾞｬ",
  "ﾎｷﾞｬｰﾜ",
  "ﾎｷﾞｬﾎｷﾞｬ",
  "ﾎｹﾞ",
  "ﾎｹﾞｰｯ",
  "ﾎｹﾞｰﾀ",
  "ﾎｹﾞﾎｹﾞ…",
  "ﾎｹﾞﾎｹﾞﾎｹﾞ",
  "ﾎｹﾞﾎｹﾞﾎｹﾞﾜｰﾂ",
  "ﾎﾁｬ",
  "ﾎﾄﾎﾄﾐﾙｸ",
  "ﾎﾅ~",
  "ﾎﾅｬﾎﾆｬ",
  "ﾎﾆ",
  "ﾎﾆｬ",
  "ﾎﾆｬ…",
  "ﾎﾆｬｰ",
  "ﾎﾆｬｰｯ",
  "ﾎﾆｬｵｰ",
  "ﾎﾆｬﾆｬ",
  "ﾎﾆｬﾋﾟﾗｰ",
  "ﾎﾆｬﾎﾆｬ",
  "ﾎﾆｬﾎﾆｬ~",
  "ﾎﾆｬﾎﾆｬ…",
  "ﾎﾆｬﾎﾆｬﾎﾆｬﾎﾆｬﾎﾆｬﾎﾆｬ~",
  "ﾎﾆｬﾖｰ",
  "ﾎﾆｬﾖﾖ~?",
  "ﾎﾆｬﾗｰ",
  "ﾎﾆｬﾗﾗ",
  "ﾎﾆｬﾗﾘｶ",
  "ﾎﾆｬﾘ",
  "ﾎﾆｬﾘ ﾎﾆｬﾘｺ ﾎﾆｬﾗﾘｶ",
  "ﾎﾆｬﾘｺ",
  "ﾎﾆｬﾘﾎﾆｬﾗﾘﾎﾆｬﾗﾘｶ",
  "ﾎﾆｬﾜﾜﾜﾜﾜ~",
  "ﾎﾇ",
  "ﾎﾊﾞﾊﾞﾊﾞﾊﾞ",
  "ﾎﾋ",
  "ﾎﾋｰ",
  "ﾎﾍ",
  "ﾎﾍ~…",
  "ﾎﾍﾞﾗ",
  "ﾎﾎﾎ",
  "ﾎﾔﾔﾔﾔ~",
  "ﾎﾖﾖ",
  "ﾎﾖﾖ~",
  "ﾎﾖﾖﾎﾖ",
  "ﾎﾗﾗﾗﾗ",
  "ﾎﾚ",
  "ﾎﾛﾛﾛﾛﾛ",
  "ﾎﾜﾎﾜ",
  "ﾎﾜﾎﾜﾎﾜ~",
  "ﾎﾜﾎﾜﾎﾜﾖ",
  "ﾎﾜﾝﾎ",
  "ﾎﾜﾝﾎｰ",
  "ﾎﾜﾝﾎﾜﾝﾎ",
  "ﾎﾝﾆｬﾜ",
  "ﾎﾝﾜ",
  "ﾎﾝﾜ~",
  "ﾎﾞ~…",
  "ﾎﾞｯｶｯﾁｮ",
  "ﾎﾞｵ~~~~~~~~~~~",
  "ﾎﾞｷﾞｬｰｯｷｬﾇﾍﾟ",
  "ﾎﾞｹｯ",
  "ﾎﾞﾋﾟｰ",
  "ﾎﾞﾍｰ",
  "ﾎﾞﾐﾎﾞﾐﾎﾞﾐ",
  "ﾎﾞﾚｱﾛﾍﾟﾙﾀ?",
  "ﾎﾞﾜｰ",
  "ﾎﾞﾜﾎﾞﾜﾎﾞ",
  "ﾎﾞﾜﾜﾜ",
  "ﾎﾟｦ",
  "ﾎﾟｯﾜｯ",
  "ﾎﾟｲ~",
  "ﾎﾟｲｰ",
  "ﾎﾟｳｰ",
  "ﾎﾟｶ!",
  "ﾎﾟｷｬ",
  "ﾎﾟｷｬｷｬ",
  "ﾎﾟｷｬｷｬｷｬｷｬ…",
  "ﾎﾟｷｰ",
  "ﾎﾟｷﾜｷｬ",
  "ﾎﾟｹ",
  "ﾎﾟｹｹ",
  "ﾎﾟｺﾍﾟﾝ",
  "ﾎﾟｺﾎﾟｺ",
  "ﾎﾟｻﾎﾟｻ",
  "ﾎﾟﾆｬ~",
  "ﾎﾟﾆｬｰﾝ",
  "ﾎﾟﾆｬﾎﾟﾆｬ",
  "ﾎﾟﾆｬﾜ",
  "ﾎﾟﾋ",
  "ﾎﾟﾋｬﾋｬ",
  "ﾎﾟﾋﾟｰ",
  "ﾎﾟﾍ",
  "ﾎﾟﾍｴ",
  "ﾎﾟﾎﾟ",
  "ﾎﾟﾐ",
  "ﾎﾟﾐ…",
  "ﾎﾟﾐｰ",
  "ﾎﾟﾐﾎﾟﾐ",
  "ﾎﾟﾐﾎﾟﾐﾎﾟﾐ",
  "ﾎﾟﾔ",
  "ﾎﾟﾔｰﾝ",
  "ﾎﾟﾖ~",
  "ﾎﾟﾖｰ",
  "ﾎﾟﾖﾎﾟﾖ~",
  "ﾎﾟﾖﾐ",
  "ﾎﾟﾖﾜﾆｬ~",
  "ﾎﾟﾖﾝ",
  "ﾎﾟﾜ",
  "ﾎﾟﾜ---------!!!!!!!!!",
  "ﾎﾟﾜ~…",
  "ﾎﾟﾜｯ",
  "ﾎﾟﾜｯﾎﾟ",
  "ﾎﾟﾜｯﾎﾟﾜｯ",
  "ﾎﾟﾜｰ",
  "ﾎﾟﾜｰﾜ",
  "ﾎﾟﾜﾎﾟﾜﾎﾟﾜ",
  "ﾎﾟﾜﾜ",
  "ﾎﾟﾜﾜｰ",
  "ﾎﾟﾜﾜﾜ",
  "ﾎﾟﾜﾜﾜ…",
  "ﾎﾟﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜﾜ",
  "ﾎﾟﾜﾝｺ",
  "ﾎﾟﾜﾝﾁ!",
  "ﾎﾟﾜﾝﾎﾟﾜﾝ",
  "ﾎﾟﾜﾝﾖ",
  "ﾏ~~~~~~~~~~~~~~~~",
  "ﾏｲﾄﾞｯ!",
  "ﾐ",
  "ﾐ!",
  "ﾐ~",
  "ﾐ~~~~~~~~",
  "ﾐ゜",
  "ﾐｪﾔｰ",
  "ﾐｮ、ﾐｮ",
  "ﾐｮｰﾝﾐ",
  "ﾐｮｲｰ",
  "ﾐｮﾛﾜｵｪ",
  "ﾐｮﾜﾜﾜﾜ ﾐｮﾜﾜﾜﾜﾜﾜﾜ ﾆｮﾜﾜﾜﾜ",
  "ﾐｯ",
  "ﾐｰ",
  "ﾐｰｯ",
  "ﾐｰﾝ",
  "ﾐﾑ",
  "ﾐﾞ",
  "ﾑｲｰ",
  "ﾑﾆｬ",
  "ﾑﾆｬ…",
  "ﾑﾆｬｰ",
  "ﾑﾆｬｹﾞｰ",
  "ﾑﾆﾔｰ",
  "ﾑﾆﾔﾝﾘ",
  "ﾑﾑﾑ",
  "ﾑﾘ~",
  "ﾑﾘﾖ",
  "ﾑﾝ",
  "ﾒｮ--------!!!!!",
  "ﾒｮ~",
  "ﾒｮ…",
  "ﾒｮｮ",
  "ﾒｮｰ",
  "ﾒｶ~",
  "ﾒｶ…",
  "ﾒｺﾒｺ",
  "ﾒｿ",
  "ﾒｿ-",
  "ﾒｿ~~~~~~~~~~~~~!!!!!!!!!",
  "ﾒｿ…",
  "ﾒｿｰｯ",
  "ﾒｿﾍﾟｿ",
  "ﾒｿﾎﾟﾀﾒｿ",
  "ﾒｿﾒｿ",
  "ﾒｿﾒｿ…",
  "ﾒｿﾒｿﾒｿ",
  "ﾒｿﾒｿﾒｿﾎﾟﾀﾐｱ",
  "ﾓｮ-",
  "ﾓｹﾞﾓｹﾞ",
  "ﾓﾁｮﾓﾆｮ",
  "ﾓﾁﾓﾁ",
  "ﾓﾆ-",
  "ﾓﾆｬ",
  "ﾓﾏﾓﾏﾓﾏﾓ",
  "ﾓﾓﾓ",
  "ﾓﾖｰ",
  "ﾓﾖﾓﾖ~",
  "ﾓﾛｺｼﾓﾛｺｼ",
  "ﾓﾝﾀﾞ",
  "ﾔｯ!",
  "ﾔｯﾀｰ",
  "ﾔｰ",
  "ﾔｰｯ",
  "ﾔｰﾝ",
  "ﾔﾀ-ｯ!",
  "ﾔﾀｰｯ",
  "ﾔﾀﾞｰｯ",
  "ﾔﾊ",
  "ﾔﾊ!",
  "ﾔﾊｰｯ!",
  "ﾔﾜﾗｶ",
  "ﾔﾜﾗｶﾔｷﾆｸ",
  "ﾕ",
  "ﾕｱｰﾝﾕ",
  "ﾖﾎﾎ",
  "ﾖﾎﾟﾎﾟｲ",
  "ﾖﾖ…",
  "ﾖﾖﾖ",
  "ﾗｯｾｰﾗ",
  "ﾗｰﾗﾗ",
  "ﾗﾗﾗ",
  "ﾗﾗﾗｺｯﾍﾟﾊﾟﾝ",
  "ﾗﾝﾗﾗ",
  "ﾗﾝﾗﾗﾝ",
  "ﾗﾝﾗﾝ",
  "ﾙﾝ",
  "ﾙﾝﾊﾞﾁｬﾝ",
  "ﾙﾝﾊﾞﾁｬﾝ…?",
  "ﾙﾝﾙﾙ",
  "ﾙﾝﾙﾝ",
  "ﾜ!",
  "ﾜ~",
  "ﾜ…",
  "ﾜｯ…!",
  "ﾜｰｯ",
  "ﾜｰﾜﾜﾜｰ",
  "ﾜｰﾝﾜﾝ",
  "ﾜｱｰｯ",
  "ﾜｲﾜｲ",
  "ﾜｲﾜｲ!",
  "ﾜｲﾜｲﾜｰ",
  "ﾜｵﾜｵ!",
  "ﾜｻﾜｻ",
  "ﾜﾆｬﾜﾆｬ",
  "ﾜﾆﾜﾆﾊﾟﾆｯｸ",
  "ﾜﾊ",
  "ﾜﾊ!",
  "ﾜﾊｰｯ",
  "ﾜﾔﾜﾔﾜﾔ",
  "ﾜﾜﾜｰﾜ ﾜｰﾜﾜ",
  "ﾜﾜﾜﾜﾜﾜﾜﾜ-",
  "ﾝｰ",
  "ﾝｰ!",
  "ﾝｰｯ",
  "ﾝｰｯ!",
  "ﾝｰﾎﾟﾖ",
  "ﾝｵｰ",
  "ﾝｷﾞｬﾜｰｯ",
  "ﾝｷﾞｮ",
  "ﾝｹﾞﾝｹﾞ",
  "ﾝｺﾞ",
  "ﾝﾅﾝﾅﾝﾅﾝﾅ…",
  "ﾝﾆｬﾜ~~~~~~~",
  "ﾝﾆｬﾝﾆｬﾝﾆｬﾝﾆｬ…",
  "ﾝﾆｰ",
  "ﾝﾋﾟｰ",
  "ﾝﾋﾟﾝﾋﾟ",
  "ﾝﾍﾟ",
  "ﾝﾐ",
  "ﾝﾐ~",
  "ﾝﾐ゛~~~~~~~~~~~~~~",
  "ﾝﾐｰ",
  "ﾝﾐﾝﾐﾝﾐ……",
  "ﾝﾓﾓﾓﾓ",
  "ﾝﾜｰ!!!!!!!!!!",
];
