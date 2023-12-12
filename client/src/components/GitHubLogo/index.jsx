import GithubLogo from '../../images/GitHub-logo.png'

export default function RepoLogo () {
    return (
        <div className='text-center p-3'>
            <a href='https://github.com/Bunde20/Team-SCCRM-3' target='_blank'>
                <img src={GithubLogo} className='col-sm-2 col-3 github-logo'></img>
            </a>
        </div>
    )
}