---
title: 'Sticking with Vim'
subtitle: 'The only text editor I use.'
date: 'Octover 31, 2021'
tags: 'tech code vim'
---

It has been several years since I've ditched the paper and pen and made the switch to a digital-note taking system. However, it took a long time for me to find the right text editor for me to write all of my notes on.

From Google Docs to Evernote, I couldn't seem to find the right product that suited my needs. Whether it was the free or premium version, I tried them all, and I was still unsatisfied.

However, just when I thought I'd lost all hope, I finally settled with one text editor that I'm truly happy with.

##### Vim, my go-to text editor

I am nowhere near recommending this [text editor](https://www.vim.org/). It's dated, complex and there's a steep learning curve. You're going to need to dedicate a lot of time just to write a couple of lines.

Yet, for some reason. I cannot seem to move away from it.

Using Vim saves me thousands of hours, it allows me to focus on my creativity and I constantly compare every other text editor and wish for them to be more like Vim.

##### What's so special about Vim?

Vim is a free and open-sources text editor that was originally designed for the command line interface, but has been ported to a standalone application with its own GUI. It's primarily used by developers to help navigate around the terminal and edit config files.

A true Vim ninja can write, edit and navigate around a document without ever lifting a finger off the keyboard. This is made possible because of the many modes available:

1. Normal
2. Insert
3. Visual
4. Command-line

The concept of modes may be a little difficult to wrap your head around - I know it confused me a little at the beginning - and so I'll try my best to explain each mode for you.

###### Normal mode

This is the default mode you're in when you first open the app.

In normal mode, you can navigate around the document as well as manipulate the text. In this mode, almost every letter on the keyboard has a function and depending on the combinations you press, Vim will carry out a specific command.

When in this mode, it's important not to just spam the keyboard because you will be carrying out certain commands that could alter your document completely.

Sticking with the basics, here's a simple list of what some keys can do when in 'Normal mode':

```plain-text
- j - move cursor down
- k - move cursor up
- l - move cursor right
- H - move to top of screen
- M - move to middle of screen
- L - move to bottom of screen
- w - jump forwards to the start of a word
- W - jump forwards to the start of a word (words can contain punctuation)
- e - jump forwards to the end of a word
- E - jump forwards to the end of a word (words can contain punctuation)
- b - jump backwards to the start of a word
- B - jump backwards to the start of a word (words can contain punctuation)
- 0 - jump to the start of the line
- $ - jump to the end of the line
- gg - go to the first line of the document
- G - go to the last line of the document
- 5gg or 5G - go to line 5 How I was came across Vim
- r - replace a single character.
- R - replace more than one character, until ESC is pressed.
- cc - change (replace) entire line
- C - change (replace) to the end of the line
- c$ - change (replace) to the end of the line
- ciw - change (replace) entire word
- . - repeat last command
```

These are just a handful of commands, the list is endless. I have a few go-to commands that are now burned into my memory, allowing me to easily navigate and manipulate the document.

To revert to the Normal mode, you simply have to hit `Escape`.

Just a quick tip, I remapped by `Caps Lock` key to `Escape` so that my little pinky doesn't need to stretch all the way to the top-left corner.

###### Insert Mode

This mode will probably be one of the more familiar modes, you're simply 'inserting' text to the document as you do with any other text editor.

This is where you can focus on the writing and if you need to move around the document you can easily switch to 'Normal Mode' by hitting the `Escape` key.

Entering 'Insert Mode' can be done in a few ways

```plain-text
- i - insert before the cursor
- I - insert at the beginning of the line
- a - insert (append) after the cursor
- A - insert (append) at the end of the line
- o - append (open) a new line below the current line
- O - append (open) a new line above the current line dd
- ea - insert (append) at the end of the word
```

'Insert Mode' isn't just about adding text to the document. You can use a combination of keys in order to manipulate the text when in this mode as well. Below are a handful of shortcuts that I occasionally use:

```plain-text
- Ctrl + h - delete the character before the cursor during insert mode
- Ctrl + w - delete word before the cursor during insert mode
- Ctrl + j - begin new line during insert mode
- Ctrl + t - indent (move right) line one shiftwidth during insert mode
- Ctrl + d - de-indent (move left) line one shiftwidth during insert mode
```

###### Visual Mode

Visual mode is when you need to highlight/select text. When in 'Normal mode' you can press `v` to enter visual mode. This updates the cursor, so you're able to select the text and apply commands specifically to what you've selected.

Similar to all the other modes, you can hit `Esc` to revert to 'Normal Mode'.

Although I don't highlight/select text that often, it's still a powerful mode to have.

###### Command-Line

This is one of the most powerful modes available on Vim.

To enter the mode you simply need to press `:` and type the relevant command that you want to perform.

Actions like 'replacing text', 'saving', and 'creating new tabs' are all available in the 'command-line' mode. Here's a list of some of the actions that I like to use in my everyday use:

```plain-text
- :w - write (save) the file, but don't exit
- :wq - write (save) and quit
- :q - quit (fails if there are unsaved changes)
- :q! or ZQ - quit and throw away unsaved changes
- :wqa - write (save) and quit on all tabs
- :vs [document] - split the page vertically and open the document
- :sp [document] - split the page horizontally and open the document
- :set wrap - allow the words to wrap
- :%s/[word]/[word]/g - find and replace words
- :set nonumber - to remove the line numbers
```

The commands listed above only scratch the surface when it comes to the 'command-line' mode. I plan to dedicate more time to this mode as I know it can further improve my workflow in the long run.

##### Key-bindings

One of the main reasons why I continue to come back to Vim is the ability to create my own key-bindings.

For example, having to type `:set wrap` every time I want to wrap every line in the document can get annoying. In Vim, you're able to edit the `.vimrc` (which is the config file) and create your own shortcut. In this case, I wanted to use the `Tab` button to toggle the wrapping of the text. By adding the follow line to my `.vimrc` file, `nnoremap <Tab> :set wrap!<CR>` I was able to easily press one button to perform the action.

The syntax can be a little confusing at first, but once you get the gist of it, you'll be configuring your own shortcuts in no time. My configurations are personal, and I'm sure my key bindings look very different from the next person.

Here's a short list of shortcuts that I programmed for myself that have improved my workflow.

```plan-text
- nnoremap <Tab> :set wrap!<CR> - To toggle Wrapping using `Tab`
- nnoremap rln :set relativenumber!<CR> - To toggle relative numbers by typing `rln`
- nnoremap rrn :set number!<CR> - To toggle numbers by typing `rrn`
- nnoremap ` :noh<CR> - To turn off the highlight search by typing '`'
- imap <C-d> <C-r>=strftime('%F')<CR> - To insert the current date by typing `Ctrl + d
```

##### Plugins

One of the other reasons that I like about Vim is the ability to install 3rd party plugins. Essentially, personalising the app further to fit your needs.

The process of installing plugins can be a little confusing - when has Vim ever been simple? - but once you do figure out the installation process, installing new plugins become a breeze. Simply add the line of code needed in your config file and type `:PluginInstall` in Vim, and away you go.

Plugins can include new functionalities, new key bindings, an updated cosmetic look. I like to search the [Vim Awesome directory](https://Vimawesome.com/) to see if there are any plugins that would suit my needs.

There are a load of plugins to choose from. Most of them are useless to me, but now and then I would find the perfect plugin.

Here's a list of the plugins that I have installed to help improve my workflow. These are the actual lines taken from my config file.

```plain-text
Plugin 'jiangmiao/auto-pairs'						" Auto pair brackets and etc...
Plugin 'junegunn/fzf'										" Fuzzy finder for Vim
Plugin 'junegunn/fzf.Vim'								" Fuzzy finder for Vim
Plugin 'junegunn/goyo.Vim' 							" Distraction-free writing in Vim
Plugin 'plasticboy/Vim-markdown'				" Syntax on markdown code fence
Plugin 'yuttie/comfortable-motion.Vim'	" Smooth scrolling
```

Plugins, coupled with bespoke key bindings, make for a great and personal experience.

##### Open-source

I'm a big proponent to open-source technology, and I'm always up for experimenting with open-source software in favour of proprietary apps.

There are many benefits when it comes to open-source. It's always available, you never have to worry about a price tag, nor do you need to worry about new features that you are forced to learn after an update.

In the past, when using proprietary apps like Evernote, it always annoyed me whenever I had to relearn the app itself whenever there was an update. It would constantly go through UI as well as feature changes, which meant that I had to take time out to learning where everything was again.

All I wanted to do was jot something down. I didn't need the rest of the bloat.

I mentioned earlier that with Vim, I have the ability to personalise it as much as I want. At the same time, I like that I have the choice not to. In my eyes, the ability to choose is an important factor.

##### My config file

Google 'Vim config file' and you're bound to see a list of users sharing their own file hosted on GitHub. Its common practice to draw inspiration from other people's configurations, however, before you mindlessly copy and paste, it would be best you understand what you're adding to your own Vim config file.

I myself keep a backup of my config on GitHub as well, but since it goes through constant updates, and it is not public, you can see my current Vim config file below. It has evolved throughout the months, and I'm positive it will evolve further.

```plain-text
set nocompatible              " be iMproved, required
filetype off                  " required

set rtp+=~/.Vim/bundle/Vundle.Vim
call vundle#begin()
Plugin 'VundleVim/Vundle.Vim' " required
Plugin 'dpelle/Vim-languagetool'
Plugin 'jiangmiao/auto-pairs'								" Auto pair brackets and etc...
Plugin 'junegunn/fzf'
Plugin 'junegunn/fzf.Vim'
Plugin 'junegunn/goyo.Vim' 									" Distraction-free writing in Vim
Plugin 'plasticboy/Vim-markdown'						" Syntax on markdown code fence
Plugin 'yuttie/comfortable-motion.Vim'			" Smooth scrolling
call vundle#end()            " required
filetype plugin indent on    " required
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" ------------------------------
" --- REMAPS ---
" ------------------------------
" Overview of which map command works in which mode.  More details below.
"      COMMANDS                    MODES ~
"      :map   :noremap  :unmap     Normal, Visual, Select, Operator-pending
"      :nmap  :nnoremap :nunmap    Normal
"      :vmap  :vnoremap :vunmap    Visual and Select
"      :smap  :snoremap :sunmap    Select
"      :xmap  :xnoremap :xunmap    Visual
"      :omap  :onoremap :ounmap    Operator-pending
"      :map!  :noremap! :unmap!    Insert and Command-line
"      :imap  :inoremap :iunmap    Insert
"      :lmap  :lnoremap :lunmap    Insert, Command-line, Lang-Arg
"      :cmap  :cnoremap :cunmap    Command-line
"
" To disable the Ctrl+e binding to nothing
inoremap <C-e> <Nop>
" To disable the Shift + F2 binding to do nothing
nnoremap Q <Nop>
" Toggle :set wrap with "Tab"
nnoremap <Tab> :set wrap!<CR>
" To toggle relative number mode with "rln"
nnoremap rln :set relativenumber!<CR>
" To toggle set number mode with "rrn"
nnoremap rrn :set number!<CR>
" Remap ` to turn off highlight search
nnoremap ` :noh<CR>
" Remap the arrow keys to resize the pane splits
nnoremap <Up>				:resize +6<CR>
nnoremap <Down>			:resize -6<CR>
nnoremap <Left>			:vertical resize +6<CR>
nnoremap <Right>		:vertical resize -6<CR>
" To insert the current date using Ctrl + d
imap <C-d> <C-r>=strftime('%F')<CR>

" To start a new journal/idea
 map == <S-Tab><S-a><C-d><Esc>jjjja<Space>

 " Remap "switch pane navigation" on Vim
 map <C-j> <C-W>j
 map <C-k> <C-W>k
 map <C-h> <C-W>h
 map <C-l> <C-W>l

 " Toggle Goyo with Shift+Tab
 map <S-Tab> :Goyo<CR>

 " Search
 map <C-p> :Files<CR>

 " Folding
 " Open current fold recursively with fo
 map ff zO
 " Unfold everything with fp
 map fo zR
 " Fold everything to foldlevel=1 with fi
 map fp :set foldlevel=1<CR>
 " ------------------------------
 " --- LET ---
 " ------------------------------
 " Let J & K utilise the smooth scrolling
 let g:comfortable_motion_scroll_down_key = "j"
 let g:comfortable_motion_scroll_up_key = "k"

 " Disable Vim folding
 let g:Vim_markdown_folding_disabled=1

 " To enable/disable folding use Vim's standard folding configuration.
 " set [no]foldenable

 " To remove the auto bullet point in plasticboy's plugin
 " Let g:Vim_markdown_auto_insert_bullets = 0

 " To remove the auto-indent in plasticboy's plugin
 let g:Vim_markdown_new_list_item_indent = 0

 " ------------------------------
 " --- OTHER ---
 " ------------------------------
 set hlsearch						" To highlight words during the search
 set incsearch						" Incremental search feature
 set ignorecase					" Searches all words no matter of case
 set nofoldenable				" To set the default to not tabulate the headers
 set noswapfile
 set relativenumber			" To turn on relative numbers by default
 set number							" To turn on numbers the side
 set splitbelow 					" Make Vim window split natural
 set splitright					" Make Vim window split natural
 set tabstop=2						" To set the tab space by 2 rather than the defuault 4
 set nowrap
 set autochdir						" Automatically change working directory to the current file
 set autoread
 syntax on
 "
 " ------------------------------
 " --- GOYO ---
 " ------------------------------
 " Ensures :q to quit even when Goyo is active & word wrap is active
function! s:goyo_enter()
		set wrap
		let b:quitting = 0
		let b:quitting_bang = 0
		autocmd QuitPre <buffer> let b:quitting = 1
		cabbrev <buffer> q! let b:quitting_bang = 1 <bar> q!
endfunction

function! s:goyo_leave()
		set nowrap
		if b:quitting && len(filter(range(1, bufnr('$')), 'buflisted(v:val)')) == 1
		if b:quitting_bang
		qa!
		else
		qa
		endif
		endif
endfunction
		autocmd! User GoyoEnter call <SID>goyo_enter()
		autocmd! User GoyoLeave call <SID>goyo_leave()
```

##### Sticking with Vim

I'm not trying to sway you to choose Vim over Google Docs or whatever text editor you're using right now. I just wanted to explain to you why I've settled for Vim and how it has benefited me.

The ability to keep my hands resting on the keyboard the entire time allows me to focus on my writing, which in turn allows me to create better work - at least that's what I hope!

I remember reading somewhere that if you watch a true Vim ninja, it is the equivalent to watching a professional pianist at work. After months of using Vim, I can switch between the different modes with ease and find myself performing powerful commands at lightning speed.

This app will take time to master, but I assure you, once you understand the basics and can navigate around the app, it will do wonders to your productivity as well as your creativity.
