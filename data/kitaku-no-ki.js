const list = [
  "ヒカゲヘゴ https://ja.wikipedia.org/wiki/%E3%83%92%E3%82%AB%E3%82%B2%E3%83%98%E3%82%B4",
  "ヘゴ https://ja.wikipedia.org/wiki/%E3%83%98%E3%82%B4",
  "ソテツ https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%86%E3%83%84",
  "イチョウ https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%81%E3%83%A7%E3%82%A6",
  "ヤクタネゴヨウ https://ja.wikipedia.org/wiki/%E3%83%A4%E3%82%AF%E3%82%BF%E3%83%8D%E3%82%B4%E3%83%A8%E3%82%A6",
  "ハイマツ https://ja.wikipedia.org/wiki/%E3%83%8F%E3%82%A4%E3%83%9E%E3%83%84",
  "アカマツ https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%AB%E3%83%9E%E3%83%84",
  "クロマツ https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%83%9E%E3%83%84",
  "リュウキュウマツ https://ja.wikipedia.org/wiki/%E3%83%AA%E3%83%A5%E3%82%A6%E3%82%AD%E3%83%A5%E3%82%A6%E3%83%9E%E3%83%84",
  "エゾマツ https://ja.wikipedia.org/wiki/%E3%82%A8%E3%82%BE%E3%83%9E%E3%83%84",
  "オウシュウトウヒ https://ja.wikipedia.org/wiki/%E3%82%AA%E3%82%A6%E3%82%B7%E3%83%A5%E3%82%A6%E3%83%88%E3%82%A6%E3%83%92",
  "レバノンスギ https://ja.wikipedia.org/wiki/%E3%83%AC%E3%83%90%E3%83%8E%E3%83%B3%E3%82%B9%E3%82%AE",
  "ヒノキ https://ja.wikipedia.org/wiki/%E3%83%92%E3%83%8E%E3%82%AD",
  "サワラ https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%AF%E3%83%A9_(%E6%A4%8D%E7%89%A9)",
  "スギ https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%AE",
  "ヌマスギ https://ja.wikipedia.org/wiki/%E3%83%8C%E3%83%9E%E3%82%B9%E3%82%AE",
  "クロベ https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%83%99",
  "アスナロ https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%B9%E3%83%8A%E3%83%AD",
  "ヒバ https://ja.wikipedia.org/wiki/%E3%83%92%E3%83%90",
  "ビャクシン https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%96%E3%82%AD",
  "カイヅカイブキ https://ja.wikipedia.org/wiki/%E3%82%AB%E3%82%A4%E3%83%85%E3%82%AB%E3%82%A4%E3%83%96%E3%82%AD",
  "ハイビャクシン https://ja.wikipedia.org/wiki/%E3%83%8F%E3%82%A4%E3%83%93%E3%83%A3%E3%82%AF%E3%82%B7%E3%83%B3",
  "ミヤマビャクシン https://ja.wikipedia.org/wiki/%E3%83%9F%E3%83%A4%E3%83%9E%E3%83%93%E3%83%A3%E3%82%AF%E3%82%B7%E3%83%B3",
  "タマイブキ https://ja.wikipedia.org/wiki/%E3%82%BF%E3%83%9E%E3%82%A4%E3%83%96%E3%82%AD",
  "キンイブキ https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%B3%E3%82%A4%E3%83%96%E3%82%AD",
  "ネズ https://ja.wikipedia.org/wiki/%E3%83%8D%E3%82%BA",
  "ハイネズ https://ja.wikipedia.org/wiki/%E3%83%8F%E3%82%A4%E3%83%8D%E3%82%BA",
  "セコイア https://ja.wikipedia.org/wiki/%E3%82%BB%E3%82%B3%E3%82%A4%E3%82%A2",
  "メタセコイア https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BF%E3%82%BB%E3%82%B3%E3%82%A4%E3%82%A2",
  "セコイアデンドロン https://ja.wikipedia.org/wiki/%E3%82%BB%E3%82%B3%E3%82%A4%E3%82%A2%E3%83%87%E3%83%B3%E3%83%89%E3%83%AD%E3%83%B3",
  "イチイ https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%81%E3%82%A4",
  "キャラボク https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%A3%E3%83%A9%E3%83%9C%E3%82%AF",
  "ヨーロッパイチイ https://ja.wikipedia.org/wiki/%E3%83%A8%E3%83%BC%E3%83%AD%E3%83%83%E3%83%91%E3%82%A4%E3%83%81%E3%82%A4",
  "タイヘイヨウイチイ https://ja.wikipedia.org/wiki/%E3%82%BF%E3%82%A4%E3%83%98%E3%82%A4%E3%83%A8%E3%82%A6%E3%82%A4%E3%83%81%E3%82%A4",
  "カヤ https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%A4",
  "ユリノキ https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%AA%E3%83%8E%E3%82%AD",
  "ハクモクレン https://ja.wikipedia.org/wiki/%E3%83%8F%E3%82%AF%E3%83%A2%E3%82%AF%E3%83%AC%E3%83%B3",
  "コブシ https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%96%E3%82%B7",
  "ホオノキ https://ja.wikipedia.org/wiki/%E3%83%9B%E3%82%AA%E3%83%8E%E3%82%AD",
  "シモクレン https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A2%E3%82%AF%E3%83%AC%E3%83%B3",
  "タムシバ https://ja.wikipedia.org/wiki/%E3%82%BF%E3%83%A0%E3%82%B7%E3%83%90",
  "クスノキ https://ja.wikipedia.org/wiki/%E3%82%AF%E3%82%B9%E3%83%8E%E3%82%AD",
  "セイロンニッケイ https://ja.wikipedia.org/wiki/%E3%82%BB%E3%82%A4%E3%83%AD%E3%83%B3%E3%83%8B%E3%83%83%E3%82%B1%E3%82%A4",
  "ゲッケイジュ https://ja.wikipedia.org/wiki/%E3%82%B2%E3%83%83%E3%82%B1%E3%82%A4%E3%82%B8%E3%83%A5",
  "センリョウ https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%B3%E3%83%AA%E3%83%A7%E3%82%A6",
  "ナンテン https://ja.wikipedia.org/wiki/%E3%83%8A%E3%83%B3%E3%83%86%E3%83%B3",
  "カツラ https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%84%E3%83%A9_(%E6%A4%8D%E7%89%A9)",
  "スズカケノキ https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%BA%E3%82%AB%E3%82%B1%E3%83%8E%E3%82%AD",
  "フウ https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A6",
  "モミジバフウ https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%9F%E3%82%B8%E3%83%90%E3%83%95%E3%82%A6",
  "ハルニレ https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%AB%E3%83%8B%E3%83%AC",
  "オヒョウ https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%92%E3%83%A7%E3%82%A6_(%E6%A4%8D%E7%89%A9)",
  "ケヤキ https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%A4%E3%82%AD",
  "イチジク https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%81%E3%82%B8%E3%82%AF",
  "ヤマグワ https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%9E%E3%82%B0%E3%83%AF",
  "オニグルミ https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%8B%E3%82%B0%E3%83%AB%E3%83%9F",
  "サワグルミ https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%AF%E3%82%B0%E3%83%AB%E3%83%9F",
  "ペカン https://ja.wikipedia.org/wiki/%E3%83%9A%E3%82%AB%E3%83%B3",
  "ヤマモモ https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%9E%E3%83%A2%E3%83%A2",
  "ハンノキ https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%B3%E3%83%8E%E3%82%AD",
  "ヤシャブシ https://ja.wikipedia.org/wiki/%E3%83%A4%E3%82%B7%E3%83%A3%E3%83%96%E3%82%B7",
  "ウダイカンバ https://ja.wikipedia.org/wiki/%E3%82%A6%E3%83%80%E3%82%A4%E3%82%AB%E3%83%B3%E3%83%90",
  "ダケカンバ https://ja.wikipedia.org/wiki/%E3%83%80%E3%82%B1%E3%82%AB%E3%83%B3%E3%83%90",
  "ミズメ https://ja.wikipedia.org/wiki/%E3%83%9F%E3%82%BA%E3%83%A1",
  "シラカバ https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A9%E3%82%AB%E3%83%90",
  "ハシバミ https://ja.wikipedia.org/wiki/%E3%83%8F%E3%82%B7%E3%83%90%E3%83%9F",
  "ツノハシバミ https://ja.wikipedia.org/wiki/%E3%83%84%E3%83%8E%E3%83%8F%E3%82%B7%E3%83%90%E3%83%9F",
  "セイヨウハシバミ https://ja.wikipedia.org/wiki/%E3%82%BB%E3%82%A4%E3%83%A8%E3%82%A6%E3%83%8F%E3%82%B7%E3%83%90%E3%83%9F",
  "クマシデ https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%9E%E3%82%B7%E3%83%87",
  "アカシデ https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%AB%E3%82%B7%E3%83%87",
  "イヌシデ https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%8C%E3%82%B7%E3%83%87",
  "クリ https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AA",
  "ブナ https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%8A",
  "イヌブナ https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%8C%E3%83%96%E3%83%8A",
  "コナラ https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%8A%E3%83%A9",
  "ウバメガシ https://ja.wikipedia.org/wiki/%E3%82%A6%E3%83%90%E3%83%A1%E3%82%AC%E3%82%B7",
  "ミズナラ https://ja.wikipedia.org/wiki/%E3%83%9F%E3%82%BA%E3%83%8A%E3%83%A9",
  "シラカシ https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A9%E3%82%AB%E3%82%B7",
  "クヌギ https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%8C%E3%82%AE",
  "ヤマナラシ https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%9E%E3%83%8A%E3%83%A9%E3%82%B7",
  "セイヨウハコヤナギ https://ja.wikipedia.org/wiki/%E3%82%BB%E3%82%A4%E3%83%A8%E3%82%A6%E3%83%8F%E3%82%B3%E3%83%A4%E3%83%8A%E3%82%AE",
  "シダレヤナギ https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%80%E3%83%AC%E3%83%A4%E3%83%8A%E3%82%AE",
  "ネコヤナギ https://ja.wikipedia.org/wiki/%E3%83%8D%E3%82%B3%E3%83%A4%E3%83%8A%E3%82%AE",
  "ヤブツバキ https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%96%E3%83%84%E3%83%90%E3%82%AD",
  "サザンカ https://ja.wikipedia.org/wiki/%E3%82%B5%E3%82%B6%E3%83%B3%E3%82%AB",
  "カンツバキ https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%B3%E3%83%84%E3%83%90%E3%82%AD",
  "チャノキ https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A3%E3%83%8E%E3%82%AD",
  "サカキ https://ja.wikipedia.org/wiki/%E3%82%B5%E3%82%AB%E3%82%AD",
  "ヒサカキ https://ja.wikipedia.org/wiki/%E3%83%92%E3%82%B5%E3%82%AB%E3%82%AD",
  "ハマヒサカキ https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%9E%E3%83%92%E3%82%B5%E3%82%AB%E3%82%AD",
  "ナツツバキ https://ja.wikipedia.org/wiki/%E3%83%8A%E3%83%84%E3%83%84%E3%83%90%E3%82%AD",
  "ヒメシャラ https://ja.wikipedia.org/wiki/%E3%83%92%E3%83%A1%E3%82%B7%E3%83%A3%E3%83%A9",
  "モッコク https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%83%E3%82%B3%E3%82%AF",
  "キンシバイ https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%B3%E3%82%B7%E3%83%90%E3%82%A4",
  "ビョウヤナギ https://ja.wikipedia.org/wiki/%E3%83%93%E3%83%A7%E3%82%A6%E3%83%A4%E3%83%8A%E3%82%AE",
  "シナノキ https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%8A%E3%83%8E%E3%82%AD",
  "ドウダンツツジ https://ja.wikipedia.org/wiki/%E3%83%89%E3%82%A6%E3%83%80%E3%83%B3%E3%83%84%E3%83%84%E3%82%B8",
  "サラサドウダン https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%A9%E3%82%B5%E3%83%89%E3%82%A6%E3%83%80%E3%83%B3",
  "ナツハゼ https://ja.wikipedia.org/wiki/%E3%83%8A%E3%83%84%E3%83%8F%E3%82%BC",
  "リョウブ https://ja.wikipedia.org/wiki/%E3%83%AA%E3%83%A7%E3%82%A6%E3%83%96",
  "カキ https://ja.wikipedia.org/wiki/%E3%82%AB%E3%82%AD%E3%83%8E%E3%82%AD",
  "黒檀 https://ja.wikipedia.org/wiki/%E9%BB%92%E6%AA%80",
  "マメガキ https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%A1%E3%82%AC%E3%82%AD",
  "ロウヤガキ https://ja.wikipedia.org/wiki/%E3%83%AD%E3%82%A6%E3%83%A4%E3%82%AC%E3%82%AD",
  "エゴノキ https://ja.wikipedia.org/wiki/%E3%82%A8%E3%82%B4%E3%83%8E%E3%82%AD",
  "ハクウンボク https://ja.wikipedia.org/wiki/%E3%83%8F%E3%82%AF%E3%82%A6%E3%83%B3%E3%83%9C%E3%82%AF",
  "アジサイ https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%B8%E3%82%B5%E3%82%A4",
  "ノリウツギ https://ja.wikipedia.org/wiki/%E3%83%8E%E3%83%AA%E3%82%A6%E3%83%84%E3%82%AE",
  "カリン https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AA%E3%83%B3_(%E3%83%90%E3%83%A9%E7%A7%91)",
  "リンゴ https://ja.wikipedia.org/wiki/%E3%83%AA%E3%83%B3%E3%82%B4",
  "オオウラジロノキ https://ja.wikipedia.org/wiki/%E3%82%AA%E3%82%AA%E3%82%A6%E3%83%A9%E3%82%B8%E3%83%AD%E3%83%8E%E3%82%AD",
  "ウワミズザクラ https://ja.wikipedia.org/wiki/%E3%82%A6%E3%83%AF%E3%83%9F%E3%82%BA%E3%82%B6%E3%82%AF%E3%83%A9",
  "アンズ https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%82%BA",
  "ウメ https://ja.wikipedia.org/wiki/%E3%82%A6%E3%83%A1",
  "エゾヤマザクラ https://ja.wikipedia.org/wiki/%E3%82%A8%E3%82%BE%E3%83%A4%E3%83%9E%E3%82%B6%E3%82%AF%E3%83%A9",
  "カスミザクラ https://ja.wikipedia.org/wiki/%E3%82%AB%E3%82%B9%E3%83%9F%E3%82%B6%E3%82%AF%E3%83%A9",
  "スモモ https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%A2%E3%83%A2",
  "モモ https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%A2",
  "リンボク https://ja.wikipedia.org/wiki/%E3%83%AA%E3%83%B3%E3%83%9C%E3%82%AF_(%E7%8F%BE%E7%94%9F%E6%A4%8D%E7%89%A9)",
  "バクチノキ https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%AF%E3%83%81%E3%83%8E%E3%82%AD",
  "ナナカマド https://ja.wikipedia.org/wiki/%E3%83%8A%E3%83%8A%E3%82%AB%E3%83%9E%E3%83%89",
  "ウラジロノキ https://ja.wikipedia.org/wiki/%E3%82%A6%E3%83%A9%E3%82%B8%E3%83%AD%E3%83%8E%E3%82%AD",
  "ユキヤナギ https://ja.wikipedia.org/wiki/%E3%83%A6%E3%82%AD%E3%83%A4%E3%83%8A%E3%82%AE",
  "エンジュ https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%A5",
  "ニセアカシア https://ja.wikipedia.org/wiki/%E3%83%8B%E3%82%BB%E3%82%A2%E3%82%AB%E3%82%B7%E3%82%A2",
  "カリン https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AA%E3%83%B3_(%E3%83%9E%E3%83%A1%E7%A7%91)",
  "紫檀 https://ja.wikipedia.org/wiki/%E7%B4%AB%E6%AA%80",
  "ナニワズ https://ja.wikipedia.org/wiki/%E3%83%8A%E3%83%8B%E3%83%AF%E3%82%BA",
  "コショウノキ https://ja.wikipedia.org/wiki/%E3%82%B3%E3%82%B7%E3%83%A7%E3%82%A6%E3%83%8E%E3%82%AD",
  "カラスシキミ https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%A9%E3%82%B9%E3%82%B7%E3%82%AD%E3%83%9F",
  "ジンチョウゲ https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%B3%E3%83%81%E3%83%A7%E3%82%A6%E3%82%B2",
  "オニシバリ https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%8B%E3%82%B7%E3%83%90%E3%83%AA",
  "シコンノボタン https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%B3%E3%83%B3%E3%83%8E%E3%83%9C%E3%82%BF%E3%83%B3",
  "ミズキ https://ja.wikipedia.org/wiki/%E3%83%9F%E3%82%BA%E3%82%AD",
  "アオキ https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%AA%E3%82%AD_(%E6%A4%8D%E7%89%A9)",
  "サンシュユ https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%B3%E3%82%B7%E3%83%A5%E3%83%A6",
  "ヤマボウシ https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%9E%E3%83%9C%E3%82%A6%E3%82%B7",
  "ハナミズキ https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%8A%E3%83%9F%E3%82%BA%E3%82%AD",
  "ニシキギ https://ja.wikipedia.org/wiki/%E3%83%8B%E3%82%B7%E3%82%AD%E3%82%AE",
  "マユミ https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%A6%E3%83%9F",
  "ツリバナ https://ja.wikipedia.org/wiki/%E3%83%84%E3%83%AA%E3%83%90%E3%83%8A",
  "コマユミ https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%9E%E3%83%A6%E3%83%9F",
  "イヌツゲ https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%8C%E3%83%84%E3%82%B2",
  "モチノキ https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%81%E3%83%8E%E3%82%AD",
  "タラヨウ https://ja.wikipedia.org/wiki/%E3%82%BF%E3%83%A9%E3%83%A8%E3%82%A6",
  "アオハダ https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%AA%E3%83%8F%E3%83%80",
  "ウメモドキ https://ja.wikipedia.org/wiki/%E3%82%A6%E3%83%A1%E3%83%A2%E3%83%89%E3%82%AD",
  "ケンポナシ https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%B3%E3%83%9D%E3%83%8A%E3%82%B7",
  "ナツメ https://ja.wikipedia.org/wiki/%E3%83%8A%E3%83%84%E3%83%A1",
  "アサノハカエデ https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%B5%E3%83%8E%E3%83%8F%E3%82%AB%E3%82%A8%E3%83%87",
  "イタヤカエデ https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%A4%E3%82%AB%E3%82%A8%E3%83%87",
  "サトウカエデ https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%88%E3%82%A6%E3%82%AB%E3%82%A8%E3%83%87",
  "チドリノキ https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%89%E3%83%AA%E3%83%8E%E3%82%AD",
  "トウカエデ https://ja.wikipedia.org/wiki/%E3%83%88%E3%82%A6%E3%82%AB%E3%82%A8%E3%83%87",
  "ハウチワカエデ https://ja.wikipedia.org/wiki/%E3%83%8F%E3%82%A6%E3%83%81%E3%83%AF%E3%82%AB%E3%82%A8%E3%83%87",
  "ヒトツバカエデ https://ja.wikipedia.org/wiki/%E3%83%92%E3%83%88%E3%83%84%E3%83%90%E3%82%AB%E3%82%A8%E3%83%87",
  "ミツデカエデ https://ja.wikipedia.org/wiki/%E3%83%9F%E3%83%84%E3%83%87%E3%82%AB%E3%82%A8%E3%83%87",
  "メグスリノキ https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%B0%E3%82%B9%E3%83%AA%E3%83%8E%E3%82%AD",
  "トチノキ https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%81%E3%83%8E%E3%82%AD",
  "ツタウルシ https://ja.wikipedia.org/wiki/%E3%83%84%E3%82%BF%E3%82%A6%E3%83%AB%E3%82%B7",
  "ヤマウルシ https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%9E%E3%82%A6%E3%83%AB%E3%82%B7",
  "ゲッキツ https://ja.wikipedia.org/wiki/%E3%82%B2%E3%83%83%E3%82%AD%E3%83%84",
  "コシアブラ https://ja.wikipedia.org/wiki/%E3%82%B3%E3%82%B7%E3%82%A2%E3%83%96%E3%83%A9",
  "ヤマウコギ https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%9E%E3%82%A6%E3%82%B3%E3%82%AE",
  "タラノキ https://ja.wikipedia.org/wiki/%E3%82%BF%E3%83%A9%E3%83%8E%E3%82%AD",
  "カクレミノ https://ja.wikipedia.org/wiki/%E3%82%AB%E3%82%AF%E3%83%AC%E3%83%9F%E3%83%8E",
  "タカノツメ https://ja.wikipedia.org/wiki/%E3%82%BF%E3%82%AB%E3%83%8E%E3%83%84%E3%83%A1_(%E3%82%A6%E3%82%B3%E3%82%AE%E7%A7%91)",
  "ヤツデ https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%84%E3%83%87",
  "キヅタ https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%85%E3%82%BF",
  "ウリノキ https://ja.wikipedia.org/wiki/%E3%82%A6%E3%83%AA%E3%83%8E%E3%82%AD",
  "コムラサキ https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%A0%E3%83%A9%E3%82%B5%E3%82%AD",
  "ムラサキシキブ https://ja.wikipedia.org/wiki/%E3%83%A0%E3%83%A9%E3%82%B5%E3%82%AD%E3%82%B7%E3%82%AD%E3%83%96",
  "ヤブムラサキ https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%96%E3%83%A0%E3%83%A9%E3%82%B5%E3%82%AD",
  "アオダモ https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%AA%E3%83%80%E3%83%A2",
  "マルバアオダモ https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%90%E3%82%A2%E3%82%AA%E3%83%80%E3%83%A2",
  "ヤチダモ https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%81%E3%83%80%E3%83%A2",
  "キンモクセイ https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%B3%E3%83%A2%E3%82%AF%E3%82%BB%E3%82%A4",
  "ギンモクセイ https://ja.wikipedia.org/wiki/%E3%82%AE%E3%83%B3%E3%83%A2%E3%82%AF%E3%82%BB%E3%82%A4",
  "ヒイラギ https://ja.wikipedia.org/wiki/%E3%83%92%E3%82%A4%E3%83%A9%E3%82%AE",
  "ムラサキハシドイ https://ja.wikipedia.org/wiki/%E3%83%A0%E3%83%A9%E3%82%B5%E3%82%AD%E3%83%8F%E3%82%B7%E3%83%89%E3%82%A4",
  "スイカズラ https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%A4%E3%82%AB%E3%82%BA%E3%83%A9",
  "ガマズミ https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%9E%E3%82%BA%E3%83%9F",
  "オオカメノキ https://ja.wikipedia.org/wiki/%E3%82%AA%E3%82%AA%E3%82%AB%E3%83%A1%E3%83%8E%E3%82%AD",
  "ミヤマガマズミ https://ja.wikipedia.org/wiki/%E3%83%9F%E3%83%A4%E3%83%9E%E3%82%AC%E3%83%9E%E3%82%BA%E3%83%9F",
  "木 (数学) https://ja.wikipedia.org/wiki/%E6%9C%A8_(%E6%95%B0%E5%AD%A6)",
  "B*木 https://ja.wikipedia.org/wiki/B*%E6%9C%A8",
  "Treap https://ja.wikipedia.org/wiki/Treap",
  "木構造 (データ構造) https://ja.wikipedia.org/wiki/%E6%9C%A8%E6%A7%8B%E9%80%A0_(%E3%83%87%E3%83%BC%E3%82%BF%E6%A7%8B%E9%80%A0)",
  "三分探索木 https://ja.wikipedia.org/wiki/%E4%B8%89%E5%88%86%E6%8E%A2%E7%B4%A2%E6%9C%A8",
  "スパゲッティスタック https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%91%E3%82%B2%E3%83%83%E3%83%86%E3%82%A3%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF",
  "抽象構文木 https://ja.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E6%A7%8B%E6%96%87%E6%9C%A8",
  "二分木 https://ja.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%9C%A8",
  "ハッシュ木 https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E6%9C%A8",
  "汎用検索ツリー https://ja.wikipedia.org/wiki/%E6%B1%8E%E7%94%A8%E6%A4%9C%E7%B4%A2%E3%83%84%E3%83%AA%E3%83%BC",
  "フェニック木 https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A7%E3%83%8B%E3%83%83%E3%82%AF%E6%9C%A8",
  "基数木 https://ja.wikipedia.org/wiki/%E5%9F%BA%E6%95%B0%E6%9C%A8",
  "接尾辞木 https://ja.wikipedia.org/wiki/%E6%8E%A5%E5%B0%BE%E8%BE%9E%E6%9C%A8",
  "スケープゴート木 https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%97%E3%82%B4%E3%83%BC%E3%83%88%E6%9C%A8",
  "スプレー木 https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%97%E3%83%AC%E3%83%BC%E6%9C%A8",
  "kd木 https://ja.wikipedia.org/wiki/Kd%E6%9C%A8",
  "四分木 https://ja.wikipedia.org/wiki/%E5%9B%9B%E5%88%86%E6%9C%A8",
  "R木 https://ja.wikipedia.org/wiki/R%E6%9C%A8",
  "カクタスグラフ https://ja.wikipedia.org/wiki/%E3%82%AB%E3%82%AF%E3%82%BF%E3%82%B9%E3%82%B0%E3%83%A9%E3%83%95",
  "B木 https://ja.wikipedia.org/wiki/B%E6%9C%A8",
  "探索木 https://ja.wikipedia.org/wiki/%E6%8E%A2%E7%B4%A2%E6%9C%A8",
  "八分木 https://ja.wikipedia.org/wiki/%E5%85%AB%E5%88%86%E6%9C%A8",
  "B+木 https://ja.wikipedia.org/wiki/B%2B%E6%9C%A8",
  "HTree https://ja.wikipedia.org/wiki/HTree",
  "2-3 フィンガーツリー https://ja.wikipedia.org/wiki/2-3_%E3%83%95%E3%82%A3%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%84%E3%83%AA%E3%83%BC",
  "AA木 https://ja.wikipedia.org/wiki/AA%E6%9C%A8",
  "AVL木 https://ja.wikipedia.org/wiki/AVL%E6%9C%A8",
  "赤黒木 https://ja.wikipedia.org/wiki/%E8%B5%A4%E9%BB%92%E6%9C%A8",
  "スプレー木 https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%97%E3%83%AC%E3%83%BC%E6%9C%A8",
  "二重連鎖木 https://ja.wikipedia.org/wiki/%E4%BA%8C%E9%87%8D%E9%80%A3%E9%8E%96%E6%9C%A8",
  "二分探索木 https://ja.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%8E%A2%E7%B4%A2%E6%9C%A8",
  "二分ヒープ https://ja.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E3%83%92%E3%83%BC%E3%83%97",
  "平衡二分探索木 https://ja.wikipedia.org/wiki/%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%88%86%E6%8E%A2%E7%B4%A2%E6%9C%A8",
  "Cartesian tree https://en.wikipedia.org/wiki/Cartesian_tree",
  "Top tree https://en.wikipedia.org/wiki/Top_tree",
  "T-tree https://en.wikipedia.org/wiki/T-tree",
  "2-3木 https://ja.wikipedia.org/wiki/2-3%E6%9C%A8",
  "2-3-4木 https://ja.wikipedia.org/wiki/2-3-4%E6%9C%A8",
  "UB-tree https://en.wikipedia.org/wiki/UB-tree",
  "Dancing tree https://en.wikipedia.org/wiki/Dancing_tree",
  "X-tree https://en.wikipedia.org/wiki/X-tree",
  "M-tree https://en.wikipedia.org/wiki/M-tree",
  "Ctrie https://en.wikipedia.org/wiki/Ctrie",
  "X-fast trie https://en.wikipedia.org/wiki/X-fast_trie",
  "Y-fast trie https://en.wikipedia.org/wiki/Y-fast_trie",
  "区間木 https://ja.wikipedia.org/wiki/%E5%8C%BA%E9%96%93%E6%9C%A8",
  "Range tree https://en.wikipedia.org/wiki/Range_tree",
  "Segment tree https://en.wikipedia.org/wiki/Segment_tree",
  "Cover tree https://en.wikipedia.org/wiki/Cover_tree",
  "Metric tree https://en.wikipedia.org/wiki/Metric_tree",
  "BK-tree https://en.wikipedia.org/wiki/BK-tree",
  "Implicit k-d tree https://en.wikipedia.org/wiki/Implicit_k-d_tree",
  "Vantage-point tree https://en.wikipedia.org/wiki/Vp-tree",
  "R+ tree https://en.wikipedia.org/wiki/R%2B_tree",
  "R*-tree https://en.wikipedia.org/wiki/R*-tree",
  "Hilbert R-tree https://en.wikipedia.org/wiki/Hilbert_R-tree",
  "Priority R-tree https://en.wikipedia.org/wiki/Priority_R-tree",
  "m-ary tree https://en.wikipedia.org/wiki/M-ary_tree",
  "Ternary tree https://en.wikipedia.org/wiki/Ternary_tree",
  "Link/cut tree https://en.wikipedia.org/wiki/Link/cut_tree",
  "Fusion tree https://en.wikipedia.org/wiki/Fusion_tree",
  "Van Emde Boas tree https://en.wikipedia.org/wiki/Van_Emde_Boas_tree",
  "Exponential tree https://en.wikipedia.org/wiki/Exponential_tree",
  "SPQR tree https://en.wikipedia.org/wiki/SPQR_tree",
  "PQ tree https://en.wikipedia.org/wiki/PQ_tree",
  "(a,b)-tree https://en.wikipedia.org/wiki/(a,b)-tree",
  "ヒープ https://ja.wikipedia.org/wiki/%E3%83%92%E3%83%BC%E3%83%97",
  "d-ary heap https://en.wikipedia.org/wiki/D-ary_heap",
  "二項ヒープ https://ja.wikipedia.org/wiki/%E4%BA%8C%E9%A0%85%E3%83%92%E3%83%BC%E3%83%97",
  "2-3 heap https://en.wikipedia.org/wiki/2%E2%80%933_heap",
  "Beap https://en.wikipedia.org/wiki/Beap",
  "フィボナッチヒープ https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%9C%E3%83%8A%E3%83%83%E3%83%81%E3%83%92%E3%83%BC%E3%83%97",
  "Leftist tree https://en.wikipedia.org/wiki/Leftist_tree",
  "Pairing heap https://en.wikipedia.org/wiki/Pairing_heap",
  "Skew heap https://en.wikipedia.org/wiki/Skew_heap",
  "Soft heap https://en.wikipedia.org/wiki/Soft_heap",
  "Weak heap https://en.wikipedia.org/wiki/Weak_heap",
  "ユグドラシル https://ja.wikipedia.org/wiki/%E3%83%A6%E3%82%B0%E3%83%89%E3%83%A9%E3%82%B7%E3%83%AB",
  "ロートスの木 https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%BC%E3%83%88%E3%82%B9%E3%81%AE%E6%9C%A8",
  "ミスティルテイン https://ja.wikipedia.org/wiki/%E3%83%9F%E3%82%B9%E3%83%86%E3%82%A3%E3%83%AB%E3%83%86%E3%82%A4%E3%83%B3",
  "タンタンコロリン https://ja.wikipedia.org/wiki/%E3%82%BF%E3%83%B3%E3%82%BF%E3%83%B3%E3%82%B3%E3%83%AD%E3%83%AA%E3%83%B3",
  "天までとどく木 https://ja.wikipedia.org/wiki/%E5%A4%A9%E3%81%BE%E3%81%A7%E3%81%A8%E3%81%A9%E3%81%8F%E6%9C%A8",
  "生命の木 https://ja.wikipedia.org/wiki/%E7%94%9F%E5%91%BD%E3%81%AE%E6%9C%A8",
  "ザックーム https://ja.wikipedia.org/wiki/%E3%82%B6%E3%83%83%E3%82%AF%E3%83%BC%E3%83%A0",
  "スィドラ https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%A3%E3%83%89%E3%83%A9",
  "知恵の樹 https://ja.wikipedia.org/wiki/%E7%9F%A5%E6%81%B5%E3%81%AE%E6%A8%B9",
  "若木 https://ja.wikipedia.org/wiki/%E8%8B%A5%E6%9C%A8",
  "食人木 https://ja.wikipedia.org/wiki/%E9%A3%9F%E4%BA%BA%E6%9C%A8",
  "インテグラル・ツリー https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%B3%E3%83%86%E3%82%B0%E3%83%A9%E3%83%AB%E3%83%BB%E3%83%84%E3%83%AA%E3%83%BC",
  "ウィスピーウッズ https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%A3%E3%82%B9%E3%83%94%E3%83%BC%E3%82%A6%E3%83%83%E3%82%BA",
  "グルート https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%88",
  "樹木子 https://ja.wikipedia.org/wiki/%E6%A8%B9%E6%9C%A8%E5%AD%90",
  "ジュレイモン https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A5%E3%83%AC%E3%82%A4%E3%83%A2%E3%83%B3",
  "スパゲッティの木 https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%91%E3%82%B2%E3%83%83%E3%83%86%E3%82%A3%E3%81%AE%E6%9C%A8",
  "ダイソン・ツリー https://ja.wikipedia.org/wiki/%E3%83%80%E3%82%A4%E3%82%BD%E3%83%B3%E3%83%BB%E3%83%84%E3%83%AA%E3%83%BC",
  "二つの木 https://ja.wikipedia.org/wiki/%E4%BA%8C%E3%81%A4%E3%81%AE%E6%9C%A8",
  "シュタイナー木 https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%A4%E3%83%8A%E3%83%BC%E6%9C%A8",
  "ラモンの木 https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%A2%E3%83%B3%E3%81%AE%E6%9C%A8",
  "テネレの木 https://ja.wikipedia.org/wiki/%E3%83%86%E3%83%8D%E3%83%AC%E3%81%AE%E6%9C%A8",
  "モチモチの木 https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%81%E3%83%A2%E3%83%81%E3%81%AE%E6%9C%A8",
  "アルビノの木 https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%AB%E3%83%93%E3%83%8E%E3%81%AE%E6%9C%A8",
  "コーヒーノキ https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%8E%E3%82%AD",
  "オヒアの木 https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%92%E3%82%A2%E3%81%AE%E6%9C%A8",
  "ジャックと豆の木 https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A3%E3%83%83%E3%82%AF%E3%81%A8%E8%B1%86%E3%81%AE%E6%9C%A8",
  "おかあさんの木 https://ja.wikipedia.org/wiki/%E3%81%8A%E3%81%8B%E3%81%82%E3%81%95%E3%82%93%E3%81%AE%E6%9C%A8",
  "ゲルニカの木 https://ja.wikipedia.org/wiki/%E3%82%B2%E3%83%AB%E3%83%8B%E3%82%AB%E3%81%AE%E6%9C%A8",
  "アイゼンハワーの木 https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%A4%E3%82%BC%E3%83%B3%E3%83%8F%E3%83%AF%E3%83%BC%E3%81%AE%E6%9C%A8",
  "絞め殺しの木 https://ja.wikipedia.org/wiki/%E7%B5%9E%E3%82%81%E6%AE%BA%E3%81%97%E3%81%AE%E6%9C%A8",
  "縛り首の木 https://ja.wikipedia.org/wiki/%E7%B8%9B%E3%82%8A%E9%A6%96%E3%81%AE%E6%9C%A8_(1959%E5%B9%B4%E3%81%AE%E6%98%A0%E7%94%BB)",
  "トゥーレの木 https://ja.wikipedia.org/wiki/%E3%83%88%E3%82%A5%E3%83%BC%E3%83%AC%E3%81%AE%E6%9C%A8",
  "ピタゴラスの木 https://ja.wikipedia.org/wiki/%E3%83%94%E3%82%BF%E3%82%B4%E3%83%A9%E3%82%B9%E3%81%AE%E6%9C%A8",
  "おしゃぶりの木 https://ja.wikipedia.org/wiki/%E3%81%8A%E3%81%97%E3%82%83%E3%81%B6%E3%82%8A%E3%81%AE%E6%9C%A8",
  "ショーシャンクの木 https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A7%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%AF%E3%81%AE%E6%9C%A8",
  "根反の大珪化木 https://ja.wikipedia.org/wiki/%E6%A0%B9%E5%8F%8D%E3%81%AE%E5%A4%A7%E7%8F%AA%E5%8C%96%E6%9C%A8",
  "カネノナルキ https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%8D%E3%83%8E%E3%83%8A%E3%83%AB%E3%82%AD",
  "ケンとメリーの木 https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%B3%E3%81%A8%E3%83%A1%E3%83%AA%E3%83%BC%E3%81%AE%E6%9C%A8",
  "泣く木 https://ja.wikipedia.org/wiki/%E6%B3%A3%E3%81%8F%E6%9C%A8",
  "テ・マツア・ナヘレ https://ja.wikipedia.org/wiki/%E3%83%86%E3%83%BB%E3%83%9E%E3%83%84%E3%82%A2%E3%83%BB%E3%83%8A%E3%83%98%E3%83%AC",
  "タネ・マフタ https://ja.wikipedia.org/wiki/%E3%82%BF%E3%83%8D%E3%83%BB%E3%83%9E%E3%83%95%E3%82%BF",
  "スタルムジェーの楢 https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%BF%E3%83%AB%E3%83%A0%E3%82%B8%E3%82%A7%E3%83%BC%E3%81%AE%E6%A5%A2",
  "ズィーバッド村のホソイトスギ https://ja.wikipedia.org/wiki/%E3%82%BA%E3%82%A3%E3%83%BC%E3%83%90%E3%83%83%E3%83%89%E6%9D%91%E3%81%AE%E3%83%9B%E3%82%BD%E3%82%A4%E3%83%88%E3%82%B9%E3%82%AE",
  "スリー・マハー菩提樹 https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%AA%E3%83%BC%E3%83%BB%E3%83%9E%E3%83%8F%E3%83%BC%E8%8F%A9%E6%8F%90%E6%A8%B9",
  "サルヴェ・アバルクーフ https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%AB%E3%83%B4%E3%82%A7%E3%83%BB%E3%82%A2%E3%83%90%E3%83%AB%E3%82%AF%E3%83%BC%E3%83%95",
  "ロイヤル・オーク https://ja.wikipedia.org/wiki/%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%AB%E3%83%BB%E3%82%AA%E3%83%BC%E3%82%AF",
  "日立の樹 https://ja.wikipedia.org/wiki/%E6%97%A5%E7%AB%8B%E3%81%AE%E6%A8%B9",
  "ひんぷんガジュマル https://ja.wikipedia.org/wiki/%E3%81%B2%E3%82%93%E3%81%B7%E3%82%93%E3%82%AC%E3%82%B8%E3%83%A5%E3%83%9E%E3%83%AB",
  "日本最古のりんごの木 https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E6%9C%80%E5%8F%A4%E3%81%AE%E3%82%8A%E3%82%93%E3%81%94%E3%81%AE%E6%9C%A8",
  "ハイペリオン https://ja.wikipedia.org/wiki/%E3%83%8F%E3%82%A4%E3%83%9A%E3%83%AA%E3%82%AA%E3%83%B3_(%E6%9C%A8)",
  "被爆アオギリ https://ja.wikipedia.org/wiki/%E8%A2%AB%E7%88%86%E3%82%A2%E3%82%AA%E3%82%AE%E3%83%AA",
];
