---
layout: postwithimage
title:  "iTerm2 ve Oh My Zsh kurulumu (macOS)"
date:   2017-03-09
categories: "Miscellaneous"
fpath: "http://www.gm2dev.com/wp-content/uploads/2016/06/test.jpg"
permalink: /itermohmyzsh/
author: "Burak Üstün"
tags: [commandline]
---

## Homebrew

### Homebrew nasıl yüklenir?

Terminale 
```` 
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install) 
````
yazarak yükleyebilirsiniz.
## iTerm2

### Nasıl Yüklenir?
Homebrew kullanıyorsanız terminale `brew cask install iterm2` yazarak,
    
Kullanmıyorsanız (ki kullanmalısınız;)). [Tıklayak indirin](http://www.iterm2.com/downloads.html) ve iTerm 2'yi yükleyin. 

ITerm2, yerleşik Terminal'den daha iyi renk doğruluğuna sahiptir, bu nedenle temalar daha iyi görünecektir.
    
ITerm renk ayarlarını edinmek için ise:

- [Solarized Dark theme](https://raw.githubusercontent.com/mbadolato/iTerm2-Color-Schemes/master/schemes/Solarized%20Dark%20-%20Patched.itermcolors) (patched version to fix the bright black value)
- [Solarized Light theme](https://raw.githubusercontent.com/altercation/solarized/master/iterm2-colors-solarized/Solarized%20Light.itermcolors)
- [More themes @ iterm2colorschemes](http://iterm2colorschemes.com/)
    
Sadece kaydedin ve dosya(lar)yı açın. Renk ayarlarını iTerm2'ye aktarın. Renk ayarlarını yüklemek için `iTerm -> preferences -> profiles -> colors -> load presets` yolunu izleyin.

## Oh My Zsh 

Daha fazla bilgi için [tıklayın](https://github.com/robbyrussell/oh-my-zsh)

### Curl ile yükleme
    
    sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
    
### Oh-My-Zsh'a tema nasıl yüklenir?

Oh-My-Zsh'a tema yüklemek için ~/.zshrc dosyasını düzenlememiz gerekiyor. Bunun için iTerm'e `nano ~/.zshrc` yazalım. Zshrc dosyası içerisinde
`ZSH_THEME = "tema adı"` kısmını düzenleyelim. **Kontrol + O** ile kaydedip **Kontrol + X** ile düzenleme ekranından çıkalım.

Ben `agnoster` adlı temayı kullanıyorum.(Bu temayı tam anlamıyla kullanmak için font indirmek gerekiyor.)

1. Bu fontları indirebilmek için ise Python kurmamız gerekiyor.
	* Bunun için iTerm'e `brew install python` yazalım.

2. Powerline fontolarını kurmak için ise
	* Yine iTerm'e ````pip install --user git+git://github.com/powerline/powerline ```` yazalım.

3. Fontu aktif etmek için ise `iTerm>Preferences>Profiles>Text altındaki **Change Font** butonuna tıklayarak yeni fontumuzu seçelim (sonunda powerline yazanlar)
4. `zshrc` içerisindeki fontu da düzenlediysek `source ~/.zshrc` yazarak değişiklikleri aktif edelim.

### Powerlevel9k

Eğer Powerline9k'yı yüklemek isterseniz (sağ tarafta zaman etiketi gibi özellikleri bulunur).
Terminale

   ```
   git clone https://github.com/bhilburn/powerlevel9k.git ~/.oh-my-zsh/custom/themes/powerlevel9k
   ```
   yazarak yükleyebilirsiniz.

Daha sonra yukarıdaki gibi `~/.zshrc` yi açıp `ZSH_THEME="powerlevel9k/powerlevel9k"` şeklinde değiştirelim.

Powerlevel9k çok daha fazlasını sunar, en iyisi [tıklayarak kendiniz bakmanız :)](https://github.com/bhilburn/powerlevel9k/wiki/Show-Off-Your-Config).

### Yamalanmış Yazıtipi nasıl yüklenir?

- [Meslo](https://github.com/Lokaltog/powerline-fonts/blob/master/Meslo/Meslo%20LG%20M%20DZ%20Regular%20for%20Powerline.otf) (Ekran görüntüsünde olan). Fontu ndirmek için "view raw" 'a tıklayın.'.
- [Others @ powerline fonts](https://github.com/powerline/fonts)
    
Açık ve "Install Font" a tıklayın.

iTerm2'de fontu etkinleştirin (iTerm -> Preferences -> Profiles -> Text -> Change Font).

Etkinleştirmek için iTermi baştan başlatın.

[Daha fazla bilgi için](https://powerline.readthedocs.io/en/latest/installation/osx.html)

## Daha fazla özelleştirme

- Otomatik öneriler
- Ok tuşlarıyla kelime atlama
- Kısa istem tarzı
- Sözdizimi vurgulama(syntax highlighting türkçesi bu tarz bir şey sanırım :D)  

aşağıdaki bölümde bulunabilir

### Otomatik öneriler (Oh My Zsh)

![Otomatik öneriler](http://i66.tinypic.com/b5i9dv.png)

Sadece adımları takip edin: https://github.com/tarruda/zsh-autosuggestions#oh-my-zsh

### Kelima Atlama

Varsayılan olarak, kelime atlama (option + → or ←) çalışmaz. Bunları aktif etmek için,  "iTerm -> Preferences -> Profiles -> Keys"'e gidin. Anahtar eşlemeleri (key mappings) listesinin altındaki '+'' işaretine basın ve aşağıdaki sıraları ekleyin:

#### Option + right

```
⌥→
Send Escape Sequence
f
```

#### Option + left

```
⌥←
Send Escape Sequence
b
```

### Özelleştirilmiş İstem Tarzı (Custom prompt styles)

Varsayılan olarak, komut isteminiz şimdi istemde "user @ hostname" gösterecektir. İsteğe bağlı olarak yerel makinenizde kendiniz oturum açtığınızda "user @ hostname" bilgilerini gizlemek için `~ / .zshrc` dosyasında` DEFAULT_USER` dosyasını normal kullanıcı adınıza ayarlayın (bunlar eşleşmelidir). Terminaldeki `whoami`'yi çalıştırarak tam kullanıcı adı değerinizi alabilirsiniz.

Daha fazla özelleştirme için: [https://code.tutsplus.com/tutorials/how-to-customize-your-command-prompt--net-24083](https://code.tutsplus.com/tutorials/how-to-customize-your-command-prompt--net-24083)

### Sözdizimi vurgulama (Syntax highlighting)

```
brew install zsh-syntax-highlighting
```


Eğer homebrew'u istemiyorsanız veya beğenmediyseniz, onun yerine [buradaki talimatları takip edin](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md). 

Homebrew aracılığıyla kurulumdan sonra , `.zshrc` dosyanızın **sonuna**

```
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```
ekleyin. Bundan sonra, terminalinizi yeniden başlatmanız en iyisi.`Source~ / .zshrc` bu eklenti ile iyi çalışmıyor gibi görünüyor.

# Default

![Default](https://gist.githubusercontent.com/kevin-smets/9722391f8b3e4fa436b1c1dcf05ecd88/raw/14012c157e280684ae5c75686eef2e302123e51b/agnoster.png)

# Powerlevel9k

![Powerlevel9k](https://gist.githubusercontent.com/kevin-smets/9722391f8b3e4fa436b1c1dcf05ecd88/raw/29389beaa891f939e274b8e20622647357e793d4/powerlevel9k.png)