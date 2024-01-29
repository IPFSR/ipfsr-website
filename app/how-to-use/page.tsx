import * as S from './styles'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import CodeBlock from '@/components/codeBlock'
import { Button } from '@/components/ui/button'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'

const HowToUse = () => {
	return (
		<div className={S.Content}>
			<section>
				<h1 className={S.ContentHeading}>sia-ds</h1>
				<br />
				<div>
					<Badge variant='secondary'>sia-ds</Badge> is used by{' '}
					<Link href='' passHref>
						<Button variant='link' className={S.Link}>
							go-ipfs
						</Button>
					</Link>{' '}
					to store raw block contents on disk. It supports several sharding
					functions (prefix, suffix, next-to-last/*). It is based on the{' '}
					<Link href='https://github.com/ipfs/go-ds-flatfs' passHref>
						<Button variant='link' className={S.Link}>
							go-ds-flatfs
						</Button>
					</Link>{' '}
					implementation with additional functionality to connect with Sia
					Renterd. All the blocks are backed up to the renterd and are
					automatically restored during lookup operations if not found locally.
				</div>
				<br />
				<p>
					It is not a general-purpose datastore and has several important
					restrictions. See the restrictions section for details.
				</p>
			</section>

			<br />

			<section>
				<h1 className={S.ContentHeading} id='install'>
					Install
				</h1>
				<br />
				<div>
					<Badge variant='secondary'>sia-ds</Badge> can be used like any Go
					module:
				</div>
				<br />
				<CodeBlock>import "github.com/IPFSR/sia-ds"</CodeBlock>
				<br />
			</section>

			<section>
				<h1 className={S.ContentHeading} id='design'>
					Design
				</h1>
				<br />
				<ul className={S.BulletList}>
					<li>
						Each PUT operation within IPFS is consistently forwarded to the
						Renterd node. If the API call to Renterd fails, then operation is
						discarded in IPFS too. This done was to chose consistency over
						availability in case of partitioning.
					</li>
					<li>
						The DELETE operations are not synced with Renterd by default. This
						strategy allows the users to restore back any data they might have
						deleted from IPFS just by trying to access it.
					</li>
					<li>
						Since all blocks are unique and this the resulting files names are
						unique, we don't need to account for object already existing in the
						bucket. IPFS already does a GET check before doing a PUT operation.
					</li>
					<li>
						The default Renterd bucket name is{' '}
						<Badge variant='secondary'>IPFS</Badge> but can be edited to allow
						for multiple IPFS node connecting to the same Renterd node. Users
						can choose a different bucket name for each IPFS node.
					</li>
					<li>
						All accidental deletes from IPFS or Filesystem should be restored by
						just accessing the block if the DELETE ops are not being synced. In
						case, they are being synced, only Filesystem level deletes can be
						restored.
					</li>
				</ul>
				<br />
			</section>

			<section>
				<h1 className={S.ContentHeading} id='usage'>
					Usage
				</h1>
				<br />
				<ul className={S.BulletList}>
					<li>
						You can run the Sia backed IPFS node by either downloading the
						customised go-IPFS implementation from{' '}
						<Link href='https://github.com/IPFSR/kubo' passHref>
							<Button variant='link' className={S.Link}>
								here
							</Button>
						</Link>{' '}
						or you can use this plugin with a vanilla Kubo by replacing the
						<Badge variant='secondary'>github.com/ipfs/go-ds-flatfs</Badge> with{' '}
						<Badge variant='secondary'>github.com/IPFS/sia-ds</Badge> in file{' '}
						<Badge variant='secondary'>plugin/plugins/flatfs/flatfs.go</Badge>
					</li>
					<li>
						Please make sure to setup your renterd() first. Once it is running,
						export the following variables to a terminal and initiate a new IPFS
						node.
					</li>
				</ul>
				<br />
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ENV VAR</TableHead>
							<TableHead>DEFAULT</TableHead>
							<TableHead>DESCRIPTION</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>
								<Badge variant='secondary'>IPFS_SIA_RENTERD_PASSWORD</Badge>
							</TableCell>
							<TableCell>{''}</TableCell>
							<TableCell>Renterd Password</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<Badge variant='secondary'>
									IPFS_SIA_RENTERD_WORKER_ADDRESS
								</Badge>
							</TableCell>
							<TableCell>{''}</TableCell>
							<TableCell>
								Renterd worker API address (ex:
								<Button variant='link' className={S.Link}>
									http://127.0.0.1:9980
								</Button>
								){' '}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<Badge variant='secondary'>IPFS_SIA_RENTERD_BUCKET</Badge>
							</TableCell>
							<TableCell>IPFS</TableCell>
							<TableCell>
								A private bucket with this name will be created and used
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<Badge variant='secondary'>IPFS_SIA_SYNC_DELETE</Badge>
							</TableCell>
							<TableCell>False(0)</TableCell>
							<TableCell>
								If set to True(1), the DELETE operation will be synced to
								Renterd bucket
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
				<br />

				<section>
					<h2 className={S.ContentSubHeading}>Instructions</h2>
					<br />
					<ul className={S.BulletList}>
						<li>
							Set up a renterd node and note down the password and API address.
						</li>
						<li>
							Open a new terminal and clone the{' '}
							<Link href='https://github.com/IPFSR/kubo' passHref>
								<Button variant='link' className={S.Link}>
									IPFSR Kubo (go-IPFS)
								</Button>
							</Link>
						</li>
					</ul>
					<br />
					<CodeBlock>git clone https://github.com/IPFSR/kubo</CodeBlock>
					<br />
					<ul className={S.BulletList}>
						Checkout the <Badge variant='secondary'>feat/sia-ds</Badge> branch
						and build the binary
					</ul>
					<br />
					<CodeBlock>
						git checkout feat/sia-ds <br /> make build
					</CodeBlock>
					<br />
					<ul className={S.BulletList}>
						<li>
							Export the{' '}
							<Badge variant='secondary'>IPFS_SIA_RENTERD_PASSWORD</Badge> and
							<Badge variant='secondary'>IPFS_SIA_RENTERD_WORKER_ADDRESS</Badge>{' '}
							environment variables.
						</li>
						<li>Initiate a new IPFS node</li>
					</ul>
					<br />
					<CodeBlock>cmd/ipfs/ipfs init</CodeBlock>
					<br />
					<ul className={S.BulletList}>
						<li>
							Verify that a new bucket named "IPFS" was created the Renterd
						</li>
						<li>Your IPFS node is not connected to the Renterd node.</li>
					</ul>
					<br />
				</section>

				<section>
					<h2 className={S.ContentSubHeading}>Restrictions</h2>
					<br />
					<div>
						FlatFS keys are severely restricted. Only keys that match
						<Badge variant='secondary'>/[0-9A-Z+-_=]\+</Badge> are allowed. That
						is, keys may only contain upper-case alpha-numeric characters, '-',
						'+', '_', and '='. This is because values are written directly to
						the filesystem without encoding.
					</div>
					<p>
						Importantly, this means namespaced keys (e.g., /FOO/BAR), are not
						allowed. Attempts to write to such keys will result in an error.
					</p>
					<br />
				</section>

				<section>
					<h2 className={S.ContentSubHeading}>DiskUsage and Accuracy</h2>
					<br />
					<div>
						This datastore implements the{' '}
						<Link
							href='https://godoc.org/github.com/ipfs/go-datastore#PersistentDatastore'
							passHref>
							<Button variant='link' className={S.Link}>
								PersistentDatastore
							</Button>
						</Link>{' '}
						interface. It offers a DiskUsage() method which strives to find a
						balance between accuracy and performance. This implies:{' '}
					</div>

					<br />

					<ul className={S.BulletList}>
						<li>
							The total disk usage of a datastore is calculated when opening the
							datastore
						</li>
						<li>
							The current disk usage is cached frequently in a file in the
							datastore root ({' '}
							<Badge variant='secondary'>diskUsage.cache</Badge> by default).
							This file is also written when the datastore is closed.{' '}
						</li>
						<li>If this file is not present when the datastore is opened:</li>
						<ul className={S.BulletList}>
							<li>
								The disk usage will be calculated by wa lking the datastore's
								directory tree and estimating the size of each folder.
							</li>
							<li>
								This may be a very slow operation for huge datastores or
								datastores with slow disks
							</li>
							<li>The operation is time-limited (5 minutes by default).</li>
							<li>
								Upon timeout, the remaining folders will be assumed to have the
								average of the previously processed ones.
							</li>
						</ul>
						<li>
							After opening, the disk usage is updated in every write/delete
							operation.
						</li>
					</ul>
					<br />
					<div>
						This means that for certain datastores (huge ones, those with very
						slow disks or special content), the values reported by{' '}
						<Badge variant='secondary'>DiskUsage()</Badge>
						might be reduced accuracy and the first startup (without a
						<Badge variant='secondary'>diskUsage.cache</Badge> file present),
						might be slow.
					</div>
					<br />
					<div>
						If you need increased accuracy or a fast start from the first time,
						you can manually create or update the{' '}
						<Badge variant='secondary'>diskUsage.cache</Badge> file.
					</div>
					<br />
					<div>
						The file <Badge variant='secondary'>diskUsage.cache</Badge> is a
						JSON file with two fields diskUsage and accuracy. For example the
						JSON file for a small repo might be:
					</div>
					<br />
					<CodeBlock>
						{JSON.stringify({ diskUsage: 6357, accuracy: 'initial-exact' })}
					</CodeBlock>
					<br />
					<div>
						<Badge variant='secondary'>diskUsage</Badge> is the calculated disk
						usage and <Badge variant='secondary'>accuracy</Badge> is a note on
						the accuracy of the initial calculation. If the initial calculation
						was accurate the file will contain the value
						<Badge variant='secondary'>initial-exact</Badge>. If some of the
						directories have too many entries and the disk usage for that
						directory was estimated based on the first 2000 entries, the file
						will contain <Badge variant='secondary'>initial-approximate</Badge>.
						If the calculation took too long and timed out as indicated above,
						the file will contain{' '}
						<Badge variant='secondary'>initial-timed-out</Badge>.
					</div>
					<br />
					<p>If the initial calculation timed out the JSON file might be:</p>
					<br />
					<CodeBlock>
						{JSON.stringify({
							diskUsage: 7589482442898,
							accuracy: 'initial-timed-out'
						})}
					</CodeBlock>
					<br />
					<p>
						To fix this with a more accurate value you could do (in the
						datastore root):
					</p>
					<br />
					<CodeBlock>
						$ du -sb .
						<br />
						7536515831332 .
						<br />$ echo -n '
						{JSON.stringify({
							diskUsage: 7536515831332,
							accuracy: 'initial-exact'
						})}
						' &gt; diskUsage.cache
					</CodeBlock>
					<br />
				</section>
			</section>

			<section>
				<h1 className={S.ContentHeading} id='contribute'>
					Contribute
				</h1>
				<br />
				<p>PRs accepted.</p>
				<div>
					Small note: If editing the README, please conform to the{' '}
					<Link href='https://github.com/RichardLitt/standard-readme' passHref>
						<Button variant='link' className={S.Link}>
							standard-readme
						</Button>
					</Link>{' '}
					specification.
				</div>
				<br />
			</section>

			<section>
				<h1 className={S.ContentHeading} id='license'>
					License
				</h1>
				<br />
				<p>MIT</p>
			</section>
		</div>
	)
}

export default HowToUse
