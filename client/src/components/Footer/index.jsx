import GithubLogo from '../../images/GitHub-logo.png'

export default function Footer() {
    return (
        <div className='text-center p-5'>
            <a href='https://github.com/Bunde20/Team-SCCRM-3' target='_blank'>
                <img src={GithubLogo} className='col-md-1 col-sm-2 col-3 github-logo'></img>
            </a>
        </div>
    )
}