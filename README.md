# bash-profile-switch
bash-profile-switch


ADD this to bash profile:

parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

export PS1="\u@\h \[\033[32m\]\w - \$(parse_git_branch)\[\033[00m\] $ "



so the cli would look like: TDX ~/HX/bash-profile-edit -  (master) $
