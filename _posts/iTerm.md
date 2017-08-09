---
layout: post
title:  "iTerm 2 & Oh-My-Zsh Kurulumu"
date:   2017-03-09
categories: "Miscellaneous"

---


[iTerm 2](https://www.iterm2.com) Mac için en iyi terminal uygulamalarından biridir.

### Yükleme

iTerm 2'yi [buraya tıklayarak](https://iterm2.com/downloads/stable/latest) indirebilirsiniz.

### Homebrew

#### Homebrew nasıl yüklenir?
```` 
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install) 
````

#### Oh-My-Zsh nasıl yüklenir?

````
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
````

#### Oh-My-Zsh'a tema nasıl yüklenir?

Oh-My-Zsh'a tema yüklemek için ~/.zshrc dosyasını düzenlememiz gerekiyor. Bunun için iTerm'e `nano ~/.zshrc` yazalım. Zshrc dosyası içerisinde
`ZSH_THEME = "tema adı"` kısmını düzenleyelim. **Kontrol + O** ile kaydedip **Kontrol + X** ile düzenleme ekranından çıkalım.

Ben `agnoster` adlı temayı kullanıyorum.(Bu temayı tam anlamıyla kullanmak için font indirmek gerekiyor.)

1. Bu fontları indirebilmek için ise Python kurmamız gerekiyor.
	* Bunun için iTerm'e `brew install python` yazalım.

2. Powerline fontolarını kurmak için ise
	* Yine iTerm'e ````pip install --user git+git://github.com/powerline/powerline ```` yazalım.

3. Fontu aktif etmek için ise `iTerm>Preferences>Profiles>Text altındaki **Change Font** butonuna tıklayarak yeni fontumuzu seçelim (sonunda powerline yazanlar)
4. `zshrc` içerisindeki fontu da düzenlediysek `source ~/.zshrc` yazarak değişiklikleri aktif edelim.

   


