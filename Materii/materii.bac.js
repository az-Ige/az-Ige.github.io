var $materii = {
  // $example: {
  // $aliases: ["haha", "ha"],
  // f$hasdivisions: false, // by default false | undefined
  // $divisions: ["Mecanica", "Termodinamica"], // => A.Mecanica , B.Termodinamica ...
  // $structure: [6, [3, 3], [3, 3]], // => see ReadMe
  // $testeadded: {
  //   "${year}_${type}_${testnumber}": {link: optional}
  // },
  // },
  $MatematicaM1: {
    $materiename: "MatematicaM1",
    $aliases: ["mate", "m1"],
    $structure: [6, [3, 3], [3, 3]], // => see ReadMe
    $testeadded: {
      "2020_ta_20": {
        varianta:
          "https://bac.simplu.info/vezi-pdf/web/viewer?file=https://arhiva.simplu.info/bac/mate/variante-2020/matematica_m_mate-info_2020_test_20.pdf",
        barem:
          "https://bac.simplu.info/vezi-pdf/web/viewer?file=https://arhiva.simplu.info/bac/mate/variante-2020/matematica_m_mate-info_2020_bar_20.pdf",
      },
      "2020_ta_19": {
        varianta:
          "https://bac.simplu.info/vezi-pdf/web/viewer?file=https://arhiva.simplu.info/bac/mate/variante-2020/matematica_m_mate-info_2020_test_19.pdf",
        barem:
          "https://bac.simplu.info/vezi-pdf/web/viewer?file=https://arhiva.simplu.info/bac/mate/variante-2020/matematica_m_mate-info_2020_bar_19.pdf",
      },
      "2020_ta_18": {
        varianta:
          "https://bac.simplu.info/vezi-pdf/web/viewer?file=https://arhiva.simplu.info/bac/mate/variante-2020/matematica_m_mate-info_2020_test_18.pdf",
        barem:
          "https://bac.simplu.info/vezi-pdf/web/viewer?file=https://arhiva.simplu.info/bac/mate/variante-2020/matematica_m_mate-info_2020_bar_18.pdf",
      },
    },
  },
};

// linkul de unde l-am luat
// numele testului (anul si tipul in nume)

g$conf = { $materii };
